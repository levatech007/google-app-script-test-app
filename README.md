# Google App Script Test App

First test app with Google App Script for CMS. 

The client is able to manage site content via Google Sheets. Content is loaded via doGet() from Google sheet to front end.
Contact form, after being sent from front end, is submitted via doPost(). After the form is validated, the content is emailed to the client's email and also posted to a separate Google sheet for record keeping.
