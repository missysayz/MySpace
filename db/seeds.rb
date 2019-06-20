10.times do
  u = User.create(
    name: Faker::DcComics.hero,
    email: Faker::Internet.free_email,
    password: 'password'
  )
  1.times do 
    name = Faker::Name.name
    u.profiles.create(
    name: name,
    dob: Faker::Date.birthday(18, 65),
    avatar: Faker::Avatar.image(name, '100x400', 'png', 'set4'),
    ) 
  end
end

puts "10 Profiles Seeded"





# 15.times do
#   d = Department.create(
#     name: Faker::Commerce.department,
#   )
#   10.times do
#     i = d.items.create(
#       name: Faker::Commerce.product_name,
#       description: Faker::Lorem.paragraph_by_chars(256, false),
#       price: Faker::Commerce.price(range = 0..1000.00, as_string = false)
#       )
#     10.times do
#       i.reviews.create(
#         title: Faker::Cannabis.health_benefit,
#         body: Faker::FamousLastWords.last_words,
#         author: Faker::Books::Dune.character,
#         rating: rand(1..5),
#         image_url: Faker::Avatar.image,
#       )
#     end
#   end
# end

# puts "Database records successfully created: 15 depts, 21 items/dept and 15 reviews/item."

