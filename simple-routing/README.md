### create angular app:

- run the following command: ng g application <name>

### add routing to the app:

the following command will generate a routing component

- to add routing after project creation: ng generate module app-routing --flat --module=app

### create the needed views:

we are going to create two new component to used as view:

- create the first component and name it home: ng g component home
- create another component: ng g component detail

### add the views to the routing component:

- create routes array to contain all routes.
- import and export RouterModule to AppRoutingModule class.
- go to app.component.html and add <router-outlet></router-outlet>
- finally add links to the components such as: <a routerLink="/detail">Detail</a>
