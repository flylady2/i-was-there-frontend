# README


##**I Was There**

This app is an online diary that I created during the covid-19 pandemic of 2020 to use as a tool to help me be more present in my life by forcing me to notice the things around me and to pay attention to how I was spending my time.  Each diary day consists of an image with a caption as well as six entries, each of which belongs to a particular category that is selected from a drop down menu.  The image is one I took that particular day and the categories are things like What I'm Reading, Lesson Learned, Problem Solved, Something Nice, etc.  


**Getting Started**

This app has a Rails backend that uses Ruby 2.7.0, Rails 6.0.2 and PostgreSql and a Javascript frontend styled with Bootstrap https://getbootstrap.com/. To use this app, fork this frontend repo and the backend from https://github.com/flylady2/i-was-there-backend and clone them down to your machine.  `cd` into the backend and run `bundle install`.  Make sure to have a Postgres server running. Then run `rails db:create, rails db:migrate, rails db:seed` and start your rails server with the `rails s` command.  Note: `seeds.rb` contains code to create 9 categories.  To change these to your own preferences, edit this file before running `rails db:seed`.  In another pane of your terminal `cd` into the frontend.  Use the command `open index.html` to run the app in your browser, preferably Chrome.


**Using This App**

Upon page load, the app displays the most recently created day from the database.  When you create a new day, the newly created day's attributes, image and entries replace those of the day that was first displayed, such that only one day is displayed at a time.  The content of the entries for the newly created day can be edited and updated, but only when it is first created.  

Because the code to display a newly created day depends upon already having a day from the databse displayed, you will not be able to see the first day you create until you refresh the page.  This also means that you will not be able to edit the entries for that first day.  If this is a concern, simply create a "dummy" day to get a day into the database, and then start your diary.  There is also a search function that allows you to find a particular day, by date, in the database.  Finally, the app requires that the inputs for the image and all six entries must be filled out before it can be submitted.


**Contributing**

Bug reports and pull requests are welcome on GitHub at https://github.com/flylady2/i-was-there-frontend or https://github.com/flylady2/i-was-there-backend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

**License**

This app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
