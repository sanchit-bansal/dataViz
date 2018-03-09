# Visualising Data
We try to visualise the dataset, the top ten busiest airports in India.

## To create an interactive map using GeoJSON data - Geovisualization
### Made with :heart: by Preetha Dutta, Sanchit Bansal and Vineet Reddy

The mapbox workshop was extremely enlightening in the sense that we learnt things that we would not have been exposed to in any other course. We were given GeoJSON files of the data which we then downloaded to feed into our Javascript code. Instead of creating Javascript manually, we wrote a python script that generated the Javascript in the syntax that we wanted it. We then proceeded to feed it it into the JS code and then created the map using the techniques we had learnt earlier.

The dataset we were given was for the busiest airports in India. After iterating through a couple of ideas about presentation, we felt like the visualization we presented was the most apt for representing the magnitude of numbers that these airports have. This representation also showcased some detail of the separate cities thereby lending an individuality to these airports.

Using what we had learnt in the class, our team tried to first of the most effective way to represent this dataset such that people could understand it easily. After a little bit of discussion, we arrived at the conclusion that the best way to depict this data would be to have a web page where one could scroll through from the busiest to the least busiest airport.

First, we created a map style using the Mapbox studio. This allowed us to create a very bland map that would allow us to place emphasis on the data. Using this map style, we combined it with our dataset to create our final map. We choose a style for the map that looked like a terminal design and interface to show the similarity.
The background of the map is set in black, which makes the light teal markings on the map stark and increase the readability of the map. Meanwhile on the

right side of the website, there is a brief writeup available for each and every airport on the dataset we worked with.
If you view the map on a zoomed out view, the cities are marked with cities with varying radii according to their place on the list. For eg. Delhi is the most popular airport and is marked with a circle of the largest radius whereas Pune is the smallest. However, the map automatically zooms in as you explore the map further. The map uses pitch in a novel way and the cities which have a sea side, it pursues the destination through that, giving it a unique view.

As you scroll down on the website on the right, the one with the write ups; the map on the left automatically zooms in on the particular city that is focused on in the right section.
The map is interactive in the sense that when you scroll down or up, the map correspondingly zooms in and out to the particular city.
 
 The scale used: 
 ![alt text](https://raw.githubusercontent.com/vineetred/dataViz/master/images/legend.png)

We have looked at the map from the perspective of the number of people flying through that airport and compared it to the population of that city. The ratio of these two produced a very interesting result! We found that Goa has a very high ratio compared to the other cities! The interesting results are in the sidebar. Just because of the population coming in the picture, we see interesting observations. The data was based off the information we were given in the Mapbox workshop. We created a new dataset and uploaded it to Mapbox.

These findings could probably mean that sheds a light on the economy of the city of the city and/or the primary purpose of the city’s airport.

*SOURCES*
1. The write-ups for the airports were accessed from the following website
https://en.wikipedia.org/wiki/List_of_the_busiest_airports_in_India
