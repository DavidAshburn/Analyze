json.extract! lead, :id, :name, :email, :phone, :lines, :notes, :created_at, :updated_at
json.url lead_url(lead, format: :json)
