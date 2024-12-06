# Run pip install pandas geopandas shapely in terminal first. 
# Run pip list

import pandas as pd
import geopandas as gpd
from shapely.geometry import Point

# Load your CSV file
data = pd.read_csv('data/data.csv')

# Assuming your coordinates are in columns named 'longitude' and 'latitude'
data['geometry'] = data.apply(lambda row: Point(row['longitude'], row['latitude']), axis=1)
geo_df = gpd.GeoDataFrame(data, geometry='geometry')

# Convert DataFrame to GeoJSON
geo_df.to_file("data/data.geojson", driver='GeoJSON')
