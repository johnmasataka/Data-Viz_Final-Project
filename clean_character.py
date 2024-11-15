import pandas as pd

# Load the dataset
file_path = "data/data.csv"  # Replace with your file path
data = pd.read_csv(file_path)

# Specify columns to clean
columns_to_clean = ['longitude', 'latitude', 'price', 'electricity', 'natural_gas']

# Clean the columns by removing leading "'" and converting to numeric
for col in columns_to_clean:
    data[col] = data[col].astype(str).str.lstrip("'").str.strip()  # Remove leading "'" and extra spaces
    data[col] = pd.to_numeric(data[col], errors='coerce')  # Convert cleaned data to numeric

# Save the cleaned data
output_path = "data_cleaned.csv"  # Replace with your desired output file path
data.to_csv(output_path, index=False)

print(f"Cleaned data saved to {output_path}")
