Mobile design first! 

The more efficient approach is starting by developing html for small screen and then adapt it with larger screen. Boostrap allow to easily handle the responsiveness needed to deal with mobile-phones. we have many elements that helps to do that:

- Grid System
- Fluid Images
- Media Queries

Media queries are one of the most important since are CSS technology to apply base on the size of the viewport. this is basically used to understand which device is watching to your websites and perform operations according to that. the grammar is as:

``` css
@media (min-width:990px){
    .container {
        width:300px;
        max-width:100%;
    }
}
```

- Grid System

is a very useful tool to responsiveness, first we have to declare in the \<head>: **\<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>** it ensures that the screen width is set tot he device width and the content is rendered with this width in mind.

the bootstrap grid take advantages of the css flex-box layout, it enable to more easier and flexible container. it is used to easy vertical alignment of content within parent elements, it allow easy reordering of content across devices and screen resolutions with the help of media query.

To use the bootstrap grid we first create a container that will be fix its dimensions with the screen sizes with the media query. We can also use the container-fluid which will do the fix automatically! inside we use the div class 'row'. this is the basic bootstrap grid which by default contains 12 elements.

``` html
<div class='container'>
    <div class='row align-items-center'>
        <div class='col-sm-5'> // 5 of 12
            five out of 5
        </div>
        <div class='col-sm-7'> // 5 + 7 = 12 of 12
        </div>
    </div>
</div>
```

the bootstrap grid make available five classes by default such as:

- default (which target all screen sizes)
- xs
- sm
- md
- lr 
- xl

using the classes **.col-\*, .col-sm-\*, col-md-\*, .col-lg-\*.** As we said every row is divided into 12 columns, using this classes we can *specify how many columns is each element large!* 


Using instead the **container-fluid** there is what so called auto-layout columns:

<img src='__images/bootstrap_grid.PNG' style='display:block;margin: 10px 0 10px 0'>

it is also possible to expliticly pass the order of the column using \<div class='col-sm-7 order-sm-first'> while using \<div class='row align-items-center'> is used to align the vertical alignment of the content while the horizontal alignment is done usign: \<div class = 'row justify-content-center0>

<img src='__images/col_auto.PNG' style='display:block;margin: 10px 0 10px 0'>

Lastly we have to **column offsets**  it means that the element from col sm and more will be moved to the right by one. 

Remeber that is also possible to nesting columns:

<img src='__images/nesting.PNG' style='display:block;margin: 10px 0 10px 0'>