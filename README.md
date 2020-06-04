## Restaurants Index View
```erb
<!-- app/views/restaurants/index.html.erb -->
<h1>Restaurants</h1>

<ul>
  <% @restaurants.each do |restaurant| %>
    <li><%= link_to restaurant.name, restaurant_path(restaurant) %></li>
  <% end %>
</ul>
```

## Restaurant Show View
```erb
<!-- app/views/restaurants/show.html.erb -->
<h1><%= @restaurant.name %> <small><%= @restaurant.address %></small></h1>
<h2>
  <%= pluralize @restaurant.reviews.size, "review" %>
</h2>

<div id="reviews">
  <% if @restaurant.reviews.blank? %>
    Be the first to leave a review for <%= @restaurant.name %>
  <% else %>
    <% @restaurant.reviews.each do |review| %>
      <p><%= review.content %></p>
    <% end %>
  <% end %>
</div>
```
