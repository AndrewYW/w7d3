json.partial! 'api/parties/party', party: @party 
json.guests do 

  json.array! @party.guests do |guest|
    json.partial! 'api/guests/guest', guest: guest
    
    json.gifts do
      json.array! guest.gifts do |gift|
        json.partial! 'api/gifts/gift', gift: gift
      end
    end
  end
  # @party.guests.each do |guest| 
  #   json.name guest.name 
  #   json.age guest.age
  #   json.favorite_color guest.favorite_color

  # end
end

# json.gifts do
#       guest.gifts.each do |gift|

#         json.title gift.title
#         json.description gift.description

#   end
# end