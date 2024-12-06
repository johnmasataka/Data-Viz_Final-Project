# Run pip install geojson in terminal first. 

import geojson
import csv

def geojson_to_csv(geojson_file, csv_file):
    """
    Convert a GeoJSON file to a CSV file.

    :param geojson_file: Path to the input GeoJSON file
    :param csv_file: Path to the output CSV file
    """
    # Load the GeoJSON file
    with open(geojson_file, 'r', encoding='utf-8') as f:
        data = geojson.load(f)

    # Extract features
    features = data.get('features', [])

    # Check if there are features
    if not features:
        print("No features found in the GeoJSON file.")
        return

    # Extract properties and coordinates
    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        
        # Write headers based on the first feature's properties
        headers = list(features[0]['properties'].keys()) + ['geometry']
        writer.writerow(headers)

        # Write feature data
        for feature in features:
            properties = feature['properties']
            geometry = feature['geometry']
            
            # Combine properties and geometry data
            row = list(properties.values()) + [geometry]
            writer.writerow(row)
    
    print(f"GeoJSON data successfully converted to CSV at {csv_file}")

# File locations
geojson_file = 'data/medianIncome.geojson'  # GeoJSON file location
csv_file = 'data/medianIncome.csv'         # Output CSV file location

# Run the conversion
geojson_to_csv(geojson_file, csv_file)
