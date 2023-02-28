greetings = ['Hello', 'Hi', 'Hey', 'Greetings', 'Salutations']

greetings.each do |greeting|
  Greeting.create(text: greeting)
end
