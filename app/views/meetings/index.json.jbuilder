json.array!(@meetings) do |meeting|
  json.extract! meeting, :id, :start_time, :end_time, :participant_count, :cost, :location, :agenda, :actions
  json.url meeting_url(meeting, format: :json)
end
