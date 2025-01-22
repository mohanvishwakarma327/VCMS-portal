from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock databases
locations = []
clients = []

# Route to handle adding a location
@app.route('/locations', methods=['POST'])
def add_location():
    try:
        data = request.json
        location_name = data.get('locationName')
        location_address = data.get('locationAddress')
        location_city = data.get('locationCity')
        location_state = data.get('locationState')
        location_zip = data.get('locationZip')
        location_country = data.get('locationCountry')

        if not all([location_name, location_address, location_city, location_state, location_zip, location_country]):
            return jsonify({'error': 'All location fields are required'}), 400

        # Add location to mock database
        location = {
            'name': location_name,
            'address': location_address,
            'city': location_city,
            'state': location_state,
            'zip': location_zip,
            'country': location_country
        }
        locations.append(location)
        return jsonify({'message': 'Location added successfully!', 'location': location}), 201

    except Exception as e:
        return jsonify({'error': 'An error occurred while adding the location', 'details': str(e)}), 500

# Route to handle adding a client
@app.route('/clients', methods=['POST'])
def add_client():
    try:
        data = request.json
        client_name = data.get('clientName')
        client_email = data.get('clientEmail')
        client_phone = data.get('clientPhone')
        client_address = data.get('clientAddress')
        client_city = data.get('clientCity')
        client_state = data.get('clientState')
        client_zip = data.get('clientZip')
        client_country = data.get('clientCountry')

        if not all([client_name, client_email, client_phone, client_address, client_city, client_state, client_zip, client_country]):
            return jsonify({'error': 'All client fields are required'}), 400

        # Add client to mock database
        client = {
            'name': client_name,
            'email': client_email,
            'phone': client_phone,
            'address': client_address,
            'city': client_city,
            'state': client_state,
            'zip': client_zip,
            'country': client_country
        }
        clients.append(client)
        return jsonify({'message': 'Client configuration added successfully!', 'client': client}), 201

    except Exception as e:
        return jsonify({'error': 'An error occurred while adding the client', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
