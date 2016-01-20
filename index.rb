# find sum of all numbers that are divisable by 3 or 5 that are below 1000
# to run this, CD into the directory and type the command 'ruby index.rb'

# start of by setting the sum variable to 0
sum = 0
# loop through numbers less than 1000
for i in 0..999
  # check if the remainder is 0 when divided by 3 or 5, if it is, add the number to the sum variable
  if i % 3 === 0 || i % 5 === 0
    sum+=i
  end
end
puts sum