#Get a local instance of Eve running
#Make sure dependencies exist and that the DB works
#Command is: "python run.py" in Shell/Terminal

from eve import Eve
app = Eve()

if __name__ == "__main__":
	app.run()

