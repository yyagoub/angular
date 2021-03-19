# angular app calls Rest api

### create angular app:

- run the following command: ng g application <name>

### import Http module to the application:

go to the app module and import HttpClientModule to the AppModule.

### create service:

the following command will generate a service

- to create new injectable service: ng generate service <name>
- import HttpClient to the service.
- create function to consume an api

### display data:

- inject the service to the component.
- invoke the service function and store the data to a class proprety.
- display the data in the html file using the previou proprety.
