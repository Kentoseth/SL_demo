#Creating a local MongoDB database using the following commands:
MONGO_HOST = "localhost"
MONGO_PORT = "27017"
#Make sure that this user is added to the DB
#Use: mongod and mongo commands to access mongoDB
#Now type: use db2 ... and then type: db.addUser("user2", "user2")
MONGO_USERNAME = "user2"
MONGO_PASSWORD = "user2"
MONGO_DBNAME = "db2"

#For the "video" resource
#Self-ref: A resource can be considered the "umbrella" for items in that category. Almost akin to an object I would say.
RESOURCE_METHODS = ['GET','POST','DELETE']

ITEM_METHODS = ['GET','PATCH','PUT','DELETE']

#Standard Client cache directive
CACHE_CONTROL = 'max-age=20'
CACHE_EXPIRES = 20

#schema according to specifications
#schema is kept separate here for convenience.
#would be better if schema is kept within resource item when there are multiple resources.
schema = {
	'title': {
		'type': 'string',
		'minlength': 1,
		'maxlength': 100,
	},
	'description': {
		'type': 'string',
		'minlength': 1,
		'maxlength': 2000,
	},
	'url': {
		'type': 'string',
		'minlength': 1,
		'maxlength': 200,
		'required': True,
	},
}

video = {
	#over-riding global settings for this, so that the resource itself can't be deleted.
	'resource_methods': ['GET', 'POST'],

	'schema': schema
}

DOMAIN = {
	'video': video,
}