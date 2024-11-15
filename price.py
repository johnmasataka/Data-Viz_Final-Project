import pandas as pd
from geopy.distance import geodesic

# Load the uploaded files
energe_res_price_with_coords_path = 'data/energe_res_price_with_coords.csv'
price_persqft_path = 'data/price_persqft.csv'

energe_df = pd.read_csv(energe_res_price_with_coords_path)
price_df = pd.read_csv(price_persqft_path)

# Ensure necessary columns are present
required_columns_energe = {'longitude', 'latitude'}
required_columns_price = {'LONGITUDE', 'LATITUDE', 'pricepersqft'}

if not required_columns_energe.issubset(energe_df.columns) or not required_columns_price.issubset(price_df.columns):
    raise ValueError("One of the files is missing required columns.")

# Filter out rows with missing coordinates
energe_df = energe_df.dropna(subset=['longitude', 'latitude'])
price_df = price_df.dropna(subset=['LONGITUDE', 'LATITUDE'])

# Function to calculate the average price per sqft based on nearby properties
def infer_price(row, price_data, max_distance=500):
    """
    Infer the average price per sqft for a building based on nearby apartment prices.
    :param row: Row of energe_df containing longitude and latitude
    :param price_data: DataFrame containing LONGITUDE, LATITUDE, and pricepersqft
    :param max_distance: Maximum distance (in meters) to consider for nearby prices
    :return: Average price per sqft for nearby properties
    """
    building_location = (row['latitude'], row['longitude'])
    price_data['distance'] = price_data.apply(
        lambda x: geodesic(building_location, (x['LATITUDE'], x['LONGITUDE'])).meters, axis=1)
    
    nearby_prices = price_data[price_data['distance'] <= max_distance]
    
    if not nearby_prices.empty:
        return nearby_prices['pricepersqft'].mean()
    return None

# Infer prices for each building
energe_df['price'] = energe_df.apply(lambda row: infer_price(row, price_df), axis=1)

# Save the updated dataframe to a new file
output_path = 'data/energe_res_price_with_coords_2.csv'
energe_df.to_csv(output_path, index=False)

output_path
