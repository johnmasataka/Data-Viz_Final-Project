import pandas as pd
import time
from geopy.geocoders import GoogleV3  # Change to OpenCage if you use that service

# File paths
input_file = "data/energe_res_price.csv"  # Input file path
output_file = "data/energe_res_price_with_coords.csv"  # Output file path

# Initialize the geolocator (Google Maps API or OpenCage)
# Replace YOUR_API_KEY with your actual API key
geolocator = GoogleV3(api_key="AIzaSyAs4b8Lyk-aDxyyoWzXBDwQxZA66bzz5Uk")

# Function to get latitude and longitude with retries
def get_lat_lon_with_retry(address, retries=3, delay=2):
    for attempt in range(retries):
        try:
            location = geolocator.geocode(address)
            if location:
                return location.longitude, location.latitude
        except Exception as e:
            print(f"Attempt {attempt + 1} failed for address {address}: {e}")
            time.sleep(delay * (attempt + 1))  # Exponential backoff
    return None, None

# Batch processing
batch_size = 50
processed_df = pd.DataFrame()  # Create an empty dataframe for results

try:
    # Load previously saved progress if it exists
    processed_df = pd.read_csv(output_file)
    print("Resuming from existing file...")
    start_index = len(processed_df)
except FileNotFoundError:
    processed_df = pd.DataFrame()
    start_index = 0

# Load the input data
df = pd.read_csv(input_file)

for i in range(start_index, len(df), batch_size):
    batch = df.iloc[i:i + batch_size]
    print(f"Processing batch {i} to {i + batch_size - 1}...")

    # Geocode each address
    lon_lat_results = batch['address'].apply(lambda addr: get_lat_lon_with_retry(addr) if pd.notnull(addr) else (None, None))
    batch['longitude'], batch['latitude'] = zip(*lon_lat_results)

    # Append the processed batch to the result dataframe
    processed_df = pd.concat([processed_df, batch], ignore_index=True)

    # Save intermediate results to avoid losing progress
    processed_df.to_csv(output_file, index=False)
    print(f"Saved batch {i} to {i + batch_size - 1}.")

print(f"Geocoding completed. File saved as {output_file}.")
