class Api::GreetingsController < ApplicationController
  def random_greeting
    random_number = rand(Greeting.count)
    @greeting = Greeting.all[random_number].text
    respond_to do |format|
      format.json { render json: @greeting }
      format.html { render html: @greeting }
    end
  end
end
