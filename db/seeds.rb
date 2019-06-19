50.times do
  name = Faker::Name.name,
  dob = Faker::Date.birthday(18, 65),
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set4'),
  Profile.create(name: name, dob: dob, avatar: avatar)
end

puts "50 Profiles Seeded"
