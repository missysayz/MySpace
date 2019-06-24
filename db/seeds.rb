

50.times do 
  name =  Faker::Name.name,
  dob = Faker::Date.birthday(18, 65),
  avatar = Faker::Avatar.image(name, '100x200', 'png', 'set2'),
  Profile.create(name: name, dob: dob, avatar: avatar, user_id: 1)
end

puts "50 profiles seeded"







# 10.times do
#   u = User.create(
#     name: Faker::DcComics.hero,
#     email: Faker::Internet.free_email,
#     password: 'password'
#   )
#   1.times do 
#     name = Faker::Name.name
#     u.profiles.create(
#     name: name,
#     dob: Faker::Date.birthday(18, 65),
#     avatar: Faker::Avatar.image(name, '100x400', 'png', 'set4'),
#     ) 
#   end
# end

# puts "10 Profiles Seeded"





