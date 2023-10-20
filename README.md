Ski Colorado is a showcase of some of Colorado's best ski resorts that we have to offer.
In order to start this appliction, you first need to fork and clone the Github repository.
Once cloned, you need to cd into the repository folder and open in a text editor of your choice.
Once open, in the terminal, you need to run the commands: npm run dev && json-server --watch db.json -p4000.
If the website does not open in your browser immediately, there should be a link after the command npm run dev.
Once the website is open, you can view all of the mountains.
The website features a filter by pass option if you have a ski season pass, and a sort by category function.
If there is a missing website that you feel belongs in the showcase, simply navigate to the new mountain form page in the navbar and add your mountain there.
Any mountains added to the showcase will persist in the backend db.json file under the "addedResorts" object.