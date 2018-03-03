# bulma-stimulus
> Bulma components wrapped with Stimulus.js for use in Rails.

## Why?
I didn't need a full front-end framework for a Rails project since most views are being rendered server side. [Bulma](https://bulma.io) is a great starting CSS only framework that doesn't include any default Javascript like Bootstrap does. [Buefy](https://buefy.github.io/#/) is a great project if you're doing the full [Vue.js](https://vuejs.org) frontend. It even mixes in well with Rails >= 5.1 with Webpack, but [Rails/Webpacker](https://github.com/rails/webpacker) does not play well with Engines.

### Quck Example

This will wrap the ActionView checkbox helper with the [Buefy Checkbox](https://buefy.github.io/#/documentation/checkbox) styling.

```erb
<!-- views/post/new.html.erb -->
<%= form_with model: @post local: true do |form| %>
  <div class="field" data-controller="checkbox">
    <%= form.check_box :published, {"data-label": "Published"} %>
  </div>
<% end %>
```

Notice the `data-controller` attribute. This binds the field to the BulmaCheckbox component. The `data-label` attribute is optional, but allows you to override using the `name` attribute for the checkbox label.

[Radio Buttons](https://buefy.github.io/#/documentation/radio) can be wrapped in a similar way:

```erb
<!-- views/post/new.html.erb -->
<div class="field" data-controller="radio">
  <% Post.kinds.keys.each do |value| %>
    <%= form.radio_button :kind, value, {"data-label": value.humanize} %>
  <% end %>
</div>
```

This example uses the block styling to line up the radio button or check boxes horizontally. `Post.kinds` is an `enum` defined in the model.

As we user more JS enhanced components they will get added to this project.

### Up next...

* Autocomplete fields
* Datepicker
* Timepicker
* Taginput
* Modals
* Messages