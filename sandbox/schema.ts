export const muskSchema = `
# GraphQL from graph at:
# graphqleditor.com

type Query{
	capsules(
		find : CapsulesFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Capsule]
	capsulesPast(
		find : CapsulesFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Capsule]
	capsulesUpcoming(
		find : CapsulesFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Capsule]
	capsule(
		id : ID!
	) : Capsule
	company : Info
	cores(
		find : CoresFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Core]
	coresPast(
		find : CoresFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Core]
	coresUpcoming(
		find : CoresFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Core]
	core(
		id : ID!
	) : Core
	dragons(
		limit : Int
		offset : Int
	) : [Dragon]
	dragon(
		id : ID!
	) : Dragon
	histories(
		find : HistoryFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [History]
	historiesResult(
		find : HistoryFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : HistoriesResult
	history(
		id : ID!
	) : History
	landpads(
		limit : Int
		offset : Int
	) : [Landpad]
	landpad(
		id : ID!
	) : Landpad
	launches(
		find : LaunchFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Launch]
	launchesPast(
		find : LaunchFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Launch]
	launchesPastResult(
		find : LaunchFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : LaunchesPastResult
	launchesUpcoming(
		find : LaunchFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Launch]
	launch(
		id : ID!
	) : Launch
	launchLatest(
		offset : Int
	) : Launch
	launchNext(
		offset : Int
	) : Launch
	launchpads(
		limit : Int
		offset : Int
	) : [Launchpad]
	launchpad(
		id : ID!
	) : Launchpad
	missions(
		find : MissionsFind
		limit : Int
		offset : Int
	) : [Mission]
	missionsResult(
		find : MissionsFind
		limit : Int
		offset : Int
	) : MissionResult
	mission(
		id : ID!
	) : Mission
	payloads(
		find : PayloadsFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Payload]
	payload(
		id : ID!
	) : Payload
	roadster : Roadster
	rockets(
		limit : Int
		offset : Int
	) : [Rocket]
	rocketsResult(
		limit : Int
		offset : Int
	) : RocketsResult
	rocket(
		id : ID!
	) : Rocket
	ships(
		find : ShipsFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : [Ship]
	shipsResult(
		find : ShipsFind
		limit : Int
		offset : Int
		order : String
		sort : String
	) : ShipsResult
	ship(
		id : ID!
	) : Ship
}

input CapsulesFind{
	id : ID
	landings : Int
	mission : String
	original_launch : Date
	reuse_count : Int
	status : String
	type : String
}

scalar Date

type Capsule{
	id : ID
	landings : Int
	missions : [CapsuleMission]
	original_launch : Date
	reuse_count : Int
	status : String
	type : String
	dragon : Dragon
}

type CapsuleMission{
	flight : Int
	name : String
}

type Dragon{
	active : Boolean
	crew_capacity : Int
	description : String
	diameter : Distance
	dry_mass_kg : Int
	dry_mass_lb : Int
	first_flight : String
	heat_shield : DragonHeatShield
	height_w_trunk : Distance
	id : ID
	launch_payload_mass : Mass
	launch_payload_vol : Volume
	name : String
	orbit_duration_yr : Int
	pressurized_capsule : DragonPressurizedCapsule
	return_payload_mass : Mass
	return_payload_vol : Volume
	sidewall_angle_deg : Float
	thrusters : [DragonThrust]
	trunk : DragonTrunk
	type : String
	wikipedia : String
}

type Distance{
	feet : Float
	meters : Float
}

type DragonHeatShield{
	dev_partner : String
	material : String
	size_meters : Float
	temp_degrees : Int
}

type Mass{
	kg : Int
	lb : Int
}

type Volume{
	cubic_feet : Int
	cubic_meters : Int
}

type DragonPressurizedCapsule{
	payload_volume : Volume
}

type DragonThrust{
	amount : Int
	fuel_1 : String
	fuel_2 : String
	pods : Int
	thrust : Force
	type : String
}

type Force{
	kN : Float
	lbf : Float
}

type DragonTrunk{
	cargo : DragonTrunkCargo
	trunk_volume : Volume
}

type DragonTrunkCargo{
	solar_array : Int
	unpressurized_cargo : Boolean
}

type Info{
	ceo : String
	coo : String
	cto_propulsion : String
	cto : String
	employees : Int
	founded : Int
	founder : String
	headquarters : Address
	launch_sites : Int
	links : InfoLinks
	name : String
	summary : String
	test_sites : Int
	valuation : Float
	vehicles : Int
}

type Address{
	address : String
	city : String
	state : String
}

type InfoLinks{
	elon_twitter : String
	flickr : String
	twitter : String
	website : String
}

input CoresFind{
	asds_attempts : Int
	asds_landings : Int
	block : Int
	id : String
	missions : String
	original_launch : Date
	reuse_count : Int
	rtls_attempts : Int
	rtls_landings : Int
	status : String
	water_landing : Boolean
}

type Core{
	asds_attempts : Int
	asds_landings : Int
	block : Int
	id : ID
	missions : [CapsuleMission]
	original_launch : Date
	reuse_count : Int
	rtls_attempts : Int
	rtls_landings : Int
	status : String
	water_landing : Boolean
}

input HistoryFind{
	end : Date
	flight_number : Int
	id : ID
	start : Date
}

type History{
	details : String
	event_date_unix : Date
	event_date_utc : Date
	id : ID
	links : Link
	title : String
	flight : Launch
}

type Link{
	article : String
	reddit : String
	wikipedia : String
}

type Launch{
	details : String
	id : ID
	is_tentative : Boolean
	launch_date_local : Date
	launch_date_unix : Date
	launch_date_utc : Date
	launch_site : LaunchSite
	launch_success : Boolean
	launch_year : String
	links : LaunchLinks
	mission_id : [String]
	mission_name : String
	rocket : LaunchRocket
	static_fire_date_unix : Date
	static_fire_date_utc : Date
	telemetry : LaunchTelemetry
	tentative_max_precision : String
	upcoming : Boolean
	ships : [Ship]
}

type LaunchSite{
	site_id : String
	site_name_long : String
	site_name : String
}

type LaunchLinks{
	article_link : String
	flickr_images : [String]
	mission_patch_small : String
	mission_patch : String
	presskit : String
	reddit_campaign : String
	reddit_launch : String
	reddit_media : String
	reddit_recovery : String
	video_link : String
	wikipedia : String
}

type LaunchRocket{
	fairings : LaunchRocketFairings
	first_stage : LaunchRocketFirstStage
	rocket_name : String
	rocket_type : String
	rocket : Rocket
	second_stage : LaunchRocketSecondStage
}

type LaunchRocketFairings{
	recovered : Boolean
	recovery_attempt : Boolean
	reused : Boolean
	ship : String
}

type LaunchRocketFirstStage{
	cores : [LaunchRocketFirstStageCore]
}

type LaunchRocketFirstStageCore{
	block : Int
	core : Core
	flight : Int
	gridfins : Boolean
	land_success : Boolean
	landing_intent : Boolean
	landing_type : String
	landing_vehicle : String
	legs : Boolean
	reused : Boolean
}

type Rocket{
	active : Boolean
	boosters : Int
	company : String
	cost_per_launch : Int
	country : String
	description : String
	diameter : Distance
	engines : RocketEngines
	first_flight : Date
	first_stage : RocketFirstStage
	height : Distance
	id : ID
	landing_legs : RocketLandingLegs
	mass : Mass
	name : String
	payload_weights : [RocketPayloadWeight]
	second_stage : RocketSecondStage
	stages : Int
	success_rate_pct : Int
	type : String
	wikipedia : String
}

type RocketEngines{
	number : Int
	type : String
	version : String
	layout : String
	engine_loss_max : String
	propellant_1 : String
	propellant_2 : String
	thrust_sea_level : Force
	thrust_vacuum : Force
	thrust_to_weight : Float
}

type RocketFirstStage{
	burn_time_sec : Int
	engines : Int
	fuel_amount_tons : Float
	reusable : Boolean
	thrust_sea_level : Force
	thrust_vacuum : Force
}

type RocketLandingLegs{
	number : Int
	material : String
}

type RocketPayloadWeight{
	id : String
	kg : Int
	lb : Int
	name : String
}

type RocketSecondStage{
	burn_time_sec : Int
	engines : Int
	fuel_amount_tons : Float
	payloads : RocketSecondStagePayloads
	thrust : Force
}

type RocketSecondStagePayloads{
	option_1 : String
	composite_fairing : RocketSecondStagePayloadCompositeFairing
}

type RocketSecondStagePayloadCompositeFairing{
	height : Distance
	diameter : Distance
}

type LaunchRocketSecondStage{
	block : Int
	payloads : [Payload]
}

type Payload{
	customers : [String]
	id : ID
	manufacturer : String
	nationality : String
	norad_id : [Int]
	orbit_params : PayloadOrbitParams
	orbit : String
	payload_mass_kg : Float
	payload_mass_lbs : Float
	payload_type : String
	reused : Boolean
}

type PayloadOrbitParams{
	apoapsis_km : Float
	arg_of_pericenter : Float
	eccentricity : Float
	epoch : Date
	inclination_deg : Float
	lifespan_years : Float
	longitude : Float
	mean_anomaly : Float
	mean_motion : Float
	periapsis_km : Float
	period_min : Float
	raan : Float
	reference_system : String
	regime : String
	semi_major_axis_km : Float
}

type LaunchTelemetry{
	flight_club : String
}

type Ship{
	abs : Int
	active : Boolean
	attempted_landings : Int
	class : Int
	course_deg : Int
	home_port : String
	id : ID
	image : String
	imo : Int
	missions : [ShipMission]
	mmsi : Int
	model : String
	name : String
	position : ShipLocation
	roles : [String]
	speed_kn : Float
	status : String
	successful_landings : Int
	type : String
	url : String
	weight_kg : Int
	weight_lbs : Int
	year_built : Int
}

type ShipMission{
	flight : String
	name : String
}

type ShipLocation{
	latitude : Float
	longitude : Float
}

type HistoriesResult{
	result : Result
	data : [History]
}

type Result{
	totalCount : Int
}

type Landpad{
	attempted_landings : String
	details : String
	full_name : String
	id : ID
	landing_type : String
	location : Location
	status : String
	successful_landings : String
	wikipedia : String
}

type Location{
	latitude : Float
	longitude : Float
	name : String
	region : String
}

input LaunchFind{
	apoapsis_km : Float
	block : Int
	cap_serial : String
	capsule_reuse : String
	core_flight : Int
	core_reuse : String
	core_serial : String
	customer : String
	eccentricity : Float
	end : Date
	epoch : Date
	fairings_recovered : String
	fairings_recovery_attempt : String
	fairings_reuse : String
	fairings_reused : String
	fairings_ship : String
	gridfins : String
	id : ID
	inclination_deg : Float
	land_success : String
	landing_intent : String
	landing_type : String
	landing_vehicle : String
	launch_date_local : Date
	launch_date_utc : Date
	launch_success : String
	launch_year : String
	legs : String
	lifespan_years : Float
	longitude : Float
	manufacturer : String
	mean_motion : Float
	mission_id : String
	mission_name : String
	nationality : String
	norad_id : Int
	orbit : String
	payload_id : String
	payload_type : String
	periapsis_km : Float
	period_min : Float
	raan : Float
	reference_system : String
	regime : String
	reused : String
	rocket_id : String
	rocket_name : String
	rocket_type : String
	second_stage_block : String
	semi_major_axis_km : Float
	ship : String
	side_core1_reuse : String
	side_core2_reuse : String
	site_id : String
	site_name_long : String
	site_name : String
	start : Date
	tbd : String
	tentative_max_precision : String
	tentative : String
}

type LaunchesPastResult{
	result : Result
	data : [Launch]
}

type Launchpad{
	attempted_launches : Int
	details : String
	id : ID
	location : Location
	name : String
	status : String
	successful_launches : Int
	vehicles_launched : [Rocket]
	wikipedia : String
}

input MissionsFind{
	id : ID
	manufacturer : String
	name : String
	payload_id : String
}

type Mission{
	description : String
	id : ID
	manufacturers : [String]
	name : String
	twitter : String
	website : String
	wikipedia : String
	payloads : [Payload]
}

type MissionResult{
	result : Result
	data : [Mission]
}

input PayloadsFind{
	apoapsis_km : Float
	customer : String
	eccentricity : Float
	epoch : Date
	inclination_deg : Float
	lifespan_years : Float
	longitude : Float
	manufacturer : String
	mean_motion : Float
	nationality : String
	norad_id : Int
	orbit : String
	payload_id : ID
	payload_type : String
	periapsis_km : Float
	period_min : Float
	raan : Float
	reference_system : String
	regime : String
	reused : Boolean
	semi_major_axis_km : Float
}

type Roadster{
	apoapsis_au : Float
	details : String
	earth_distance_km : Float
	earth_distance_mi : Float
	eccentricity : Float
	epoch_jd : Float
	inclination : Float
	launch_date_unix : Date
	launch_date_utc : Date
	launch_mass_kg : Int
	launch_mass_lbs : Int
	longitude : Float
	mars_distance_km : Float
	mars_distance_mi : Float
	name : String
	norad_id : Int
	orbit_type : Float
	periapsis_arg : Float
	periapsis_au : Float
	period_days : Float
	semi_major_axis_au : Float
	speed_kph : Float
	speed_mph : Float
	wikipedia : String
}

type RocketsResult{
	result : Result
	data : [Rocket]
}

input ShipsFind{
	id : ID
	name : String
	model : String
	type : String
	role : String
	active : Boolean
	imo : Int
	mmsi : Int
	abs : Int
	class : Int
	weight_lbs : Int
	weight_kg : Int
	year_built : Int
	home_port : String
	status : String
	speed_kn : Int
	course_deg : Int
	latitude : Float
	longitude : Float
	successful_landings : Int
	attempted_landings : Int
	mission : String
}

type ShipsResult{
	result : Result
	data : [Ship]
}

type CoreMission{
	name : String
	flight : Int
}

scalar ObjectID

directive @rateLimit(
	max : Int
	window : String
	message : String
	identityArgs : [String]
) on FIELD_DEFINITION
schema{
	query: Query
}
`;
export const testSchema1 = `

# GraphQL from graph at:
# graphqleditor.com

type Person{
	name : String!
}

type Car{
	passenger : Person
}

extend type Person{
	age : Int
}

scalar ObjectID

directive @rateLimit on FIELD_DEFINITION

directive @ddd(
	ddd : Address
) on SCALAR

extend scalar ObjectID @ddd(
	ddd : {street : "Naftowa",city : "Bia"}
) @sss

directive @sss on SCALAR

input Address{
	street : String!
}

extend input Address{
	city : String
}

input PersonInput{
	address : Address
}


`;
export const failingSchema = `
# GraphQL from graph at:
# graphqleditor.com

"""
Put your description here
"""
type Query{
	"""
	<div>Generuje specyfikacje maszyny</div><div>w zadanym przez nas języku<br></div>
	"""
	GenerateMachineDocument(
		machine : String!
		version : String
		language : String!
	) : MachineDocument
	"""
	Po podaniu frazy zwraca autocomplete pasujących do niej fraz<br>
	"""
	autocomplete(
		query : String!
		tags : [String!]
	) : [String!]!
	"""
	Pobierz wszystkie dostępne języki<br>
	"""
	languages : [Language!]!
	generatePDF(
		machine : String!
		version : String
		language : String!
	) : String
	translations(
		phrase : String
	) : [Translation!]!
	findTemplates(
		filter : FindTemplatesInput
	) : [MachineTemplate!]
	getBuiltInStyles : [BuiltInStyles!]
	untranslated(
		languageCode : String!
	) : [String!]
}

type MachineDocument implements Margin{
	documents : [Document!]!
	header : Feature
	footer : Feature
	margin : [Float!]
	styles : [NamedStyle!]
}

interface Margin{
	margin : [Float!]
}

type Document{
	features : Features
}

type Features implements Styled & Margin & Position{
	items : [Feature!]
	style : String
	absolutePosition : Position2D
	margin : [Float!]
}

interface Styled{
	style : String
}

interface Position{
	absolutePosition : Position2D
}

type Position2D{
	x : Float!
	y : Float!
}

union Feature = TextBlock | Image | TableBlock | Columns | Stack | ListBlock

type TextBlock implements Styled & Margin & Position{
	style : String
	absolutePosition : Position2D
	text : String!
	margin : [Float!]
}

type Image implements Styled & Margin & Position{
	url : String
	style : String
	absolutePosition : Position2D
	base64 : String
	fit : [Float!]
	width : Float
	height : Float
	margin : [Float!]
}

"""
Put your description here
"""
type TableBlock implements Styled & Margin & Position{
	style : String
	absolutePosition : Position2D
	rows : [Row!]
	margin : [Float!]
	widths : [WidthType!]
}

"""
Put your description here
"""
type Row implements Styled & Margin & Position{
	style : String
	absolutePosition : Position2D
	columns : [Column!]
	margin : [Float!]
}

type Column implements Styled & Margin & Position{
	"""
	Put your description here
	"""
	colspan : Int
	rowspan : Int
	content : Feature!
	width : Float
	style : String
	absolutePosition : Position2D
	margin : [Float!]
}

type WidthType{
	N : Float
	S : String
}

type Columns implements Styled & Margin & Position{
	columns : [Column!]
	style : String
	margin : [Float!]
	absolutePosition : Position2D
}

type Stack implements Styled & Margin & Position{
	items : [Feature!]
	style : String
	absolutePosition : Position2D
	margin : [Float!]
}

type ListBlock implements Styled & Margin & Position{
	style : String
	items : [Feature!]
	absolutePosition : Position2D
	margin : [Float!]
}

type NamedStyle{
	name : String!
	style : Style!
}

type Style{
	fontSize : Float
	bold : Boolean
	background : String
	color : String
	alignment : String
	borderStyle : String
	listType : String
	listStyle : String
	separator : String
}

"""
Język w bazie danych<br>
"""
type Language{
	"""
	nazwa języka zgodna z ISO czyli np. pl,en,fr<br>
	"""
	name : String!
	"""
	wyświetlana nazwa języka po polsku: Polski, Angielski, Francuski<br>
	"""
	display : String!
}

type Translation{
	"""
	content in foreign language<br>
	"""
	template : String!
	"""
	translation language<br>
	"""
	language : Language!
	"""
	base phrase<br>
	"""
	phrase : Phrase!
}

"""
Fraza po polsku<br>
"""
type Phrase{
	"""
	treść frazy<br>
	"""
	content : String!
}

input FindTemplatesInput{
	machine : String
	version : String
}

type MachineTemplate{
	version : String
	name : String!
	template : MachineDocument!
}

enum BuiltInStyles{
	BLACK_COLUMN
	NORMAL_COLUMN
	BIG_HEADER
	MEDIUM_HEADER
	SMALL_HEADER
	NO_BORDERS_TABLE
	LIGHT_BORDER_TABLE
	SMALL_TEXT
	NORMAL_TEXT
	BLACK_BOX
}

type Mutation{
	addLanguage(
		language : AddLanguageInput!
	) : Language!
	"""
	dodaj fraze do bazy fraz<br>
	"""
	addPhrase(
		content : String!
		tags : [String!]
	) : Phrase!
	"""
	dodaj tłumaczenie frazy<br>
	"""
	addTranslation(
		translation : createTranslation!
	) : Translation!
	editTranslation(
		translation : createTranslation!
	) : Translation!
	addTemplate(
		template : MachineTemplateInput!
	) : MachineTemplate!
}

input AddLanguageInput{
	name : String!
	display : String!
}

input createTranslation{
	"""
	przetłumaczona fraza<br>
	"""
	template : String!
	"""
	kod języka<br>
	"""
	languageName : String!
	"""
	fraza<br>
	"""
	phrase : String!
}

input MachineTemplateInput{
	version : String
	name : String!
	template : MachineDocumentInput!
}

input MachineDocumentInput{
	header : FeatureInput
	footer : FeatureInput
	documents : [DocumentInput!]
}

input FeatureInput{
	type : FeatureTypes!
	style : String
	absolutePosition : Position2DInput
	margin : [Float]
	items : [FeatureInput!]
	content : FeatureInput
	colspan : Float
	rowspan : Float
	width : Float
	columns : [FeatureInput!]
	rows : [FeatureInput!]
	widths : [Width!]
	text : String
	url : String
	base64 : String
	fit : [Float!]
	height : Float
}

enum FeatureTypes{
	TEXT_BLOCK
	TABLE_BLOCK
	LIST_BLOCK
	COLUMNS
	IMAGE
	STACK
	ROW
	COLUMN
}

input Position2DInput{
	x : Float!
	y : Float!
}

input Width{
	N : Float
	S : String
}

input DocumentInput{
	features : FeaturesInput!
}

input FeaturesInput{
	items : [FeatureInput!]
}

input UntranslatedInput{
	language : String!
}

enum Alignment{
	LEFT
	CENTER
	RIGHT
}

input StyleInput{
	fontSize : Float
	bold : Boolean
	background : String
	color : String
	alignment : String
	borderStyle : String
	listType : String
	listStyle : String
	separator : String
}
schema{
	query: Query,
	mutation: Mutation
}`;
export const testBuiltInDirectives = `
	type Person{
		name: String!
		age: Int @deprecated
	}
`;
export const googleDirections = `
# GraphQL from graph at:
# graphqleditor.com

type Query{
	_: Boolean
	users: [User!]
	direction(
		coordinates: PlaceCoordinatesInput!
		travelMode: AllowTravelModes!
	): Direction
}

type User{
	id: ID!
	username: String!
	email: String!
}

input PlaceCoordinatesInput{
	startLat: Float!
	startLng: Float!
	endLat: Float!
	endLng: Float!
}

enum AllowTravelModes{
	transit
	driving
	walking
}

type Direction{
	fare: Fare
	tripData: TripData!
	steps: [StepNode!]
}

type Fare{
	currency: String!
	formattedFare: String!
	fareValue: Float!
}

type TripData{
	arrival: PointDetails!
	departure: PointDetails!
	tripDistance: TypedData!
	tripDuration: TypedData!
}

union PointDetails = TransitPointDetails | OtherPointDetails

type TransitPointDetails{
	formatedTime: String!
	timeZone: String!
	timeValue: Int!
	address: String!
	location: Coords!
}

type Coords{
	latitude: Float!
	longitude: Float!
}

type OtherPointDetails{
	address: String!
	location: Coords!
}

type TypedData{
	formattedValue: String!
	rawValue: Int!
}

interface StepNode{
	stepTravelMode: String!
	stepDistance: TypedData!
	stepDuration: TypedData!
	startLocation: Coords!
	endLocation: Coords!
	polyline: String!
	stepInstruction: String!
}

type Mutation{
	_: Boolean
	signUp(
		username: String!
		email: String!
		password: String!
	): User!
	signIn(
		email: String!
		password: String!
	): Token!
	updateUser(
		username: String
	): Boolean!
}

type Token{
	token: String!
}

type Subscription{
	_: Boolean
}

enum CacheControlScope{
	PUBLIC
	PRIVATE
}

scalar Date

type DriveStep implements StepNode{
	stepTravelMode: String!
	stepDistance: TypedData!
	stepDuration: TypedData!
	startLocation: Coords!
	endLocation: Coords!
	polyline: String!
	stepInstruction: String!
	maneuver: String
}

type TransitData{
	headSign: String!
	tripName: String!
	url: String
	tripShortName: String
	stopsCount: Int
	vehicleIcon: String!
	vehicleName: String!
	vehicleType: String!
}

type TransitStep implements StepNode{
	stepTravelMode: String!
	stepDistance: TypedData!
	stepDuration: TypedData!
	startLocation: Coords!
	endLocation: Coords!
	polyline: String!
	stepInstruction: String!
	arrival: TransitPointDetails!
	departure: TransitPointDetails!
	transitData: TransitData!
}

scalar Upload

type WalkStep implements StepNode{
	stepTravelMode: String!
	stepDistance: TypedData!
	stepDuration: TypedData!
	startLocation: Coords!
	endLocation: Coords!
	polyline: String!
	stepInstruction: String!
	walkSteps: [WalkStep!]
}

directive @rateLimit(
	max: Int
	window: String
	message: String
	identityArgs: [String]
	arrayLengthField: String
) on FIELD_DEFINITION

directive @authentication on OBJECT | FIELD_DEFINITION

directive @cacheControl(
	maxAge: Int
	scope: CacheControlScope
) on FIELD_DEFINITION | OBJECT | INTERFACE
schema{
	query: Query,
	mutation: Mutation,
	subscription: Subscription
}
`;
export const github = `
# GraphQL from graph at:
# graphqleditor.com

"""
The query root of GitHub's GraphQL interface.
"""
type Query{
	"""
	Look up a code of conduct by its key
	"""
	codeOfConduct(
		key: String!
	): CodeOfConduct
	"""
	Look up a code of conduct by its key
	"""
	codesOfConduct: [CodeOfConduct]
	"""
	Look up an open source license by its key
	"""
	license(
		key: String!
	): License
	"""
	Return a list of known open source licenses
	"""
	licenses: [License!]
	"""
	Get alphabetically sorted list of Marketplace categories
	"""
	marketplaceCategories(
		excludeEmpty: Boolean
		excludeSubcategories: Boolean
		includeCategories: [String!]
	): [MarketplaceCategory!]!
	"""
	Look up a Marketplace category by its slug.
	"""
	marketplaceCategory(
		slug: String!
		useTopicAliases: Boolean
	): MarketplaceCategory
	"""
	Look up a single Marketplace listing
	"""
	marketplaceListing(
		slug: String!
	): MarketplaceListing
	"""
	Look up Marketplace listings
	"""
	marketplaceListings(
		adminId: ID
		after: String
		allStates: Boolean
		before: String
		categorySlug: String
		first: Int
		last: Int
		organizationId: ID
		primaryCategoryOnly: Boolean = false
		slugs: [String]
		useTopicAliases: Boolean
		viewerCanAdmin: Boolean
		withFreeTrialsOnly: Boolean = false
	): MarketplaceListingConnection!
	"""
	Return information about the GitHub instance
	"""
	meta: GitHubMetadata!
	"""
	Fetches an object given its ID.
	"""
	node(
		id: ID!
	): Node
	"""
	Lookup nodes by a list of IDs.
	"""
	nodes(
		ids: [ID!]!
	): [Node!]
	"""
	Lookup a organization by login.
	"""
	organization(
		login: String!
	): Organization
	"""
	The client's rate limit information.
	"""
	rateLimit(
		dryRun: Boolean = false
	): RateLimit
	"""
	Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object
	"""
	relay: Query!
	"""
	Lookup a given repository by the owner and repository name.
	"""
	repository(
		name: String!
		owner: String!
	): Repository
	"""
	Lookup a repository owner (ie. either a User or an Organization) by login.
	"""
	repositoryOwner(
		login: String!
	): RepositoryOwner
	"""
	Lookup resource by a URL.
	"""
	resource(
		url: URI!
	): UniformResourceLocatable
	"""
	Perform a search across resources.
	"""
	search(
		after: String
		before: String
		first: Int
		last: Int
		query: String!
		type: SearchType!
	): SearchResultItemConnection!
	"""
	Look up a topic by name.
	"""
	topic(
		name: String!
	): Topic
	"""
	Lookup a user by login.
	"""
	user(
		login: String!
	): User
	"""
	The currently authenticated user.
	"""
	viewer: User!
}

"""
The Code of Conduct for a repository
"""
type CodeOfConduct{
	"""
	The body of the CoC
	"""
	body: String
	"""
	The key for the CoC
	"""
	key: String!
	"""
	The formal name of the CoC
	"""
	name: String!
	"""
	The path to the CoC
	"""
	url: URI
}

"""
An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.
"""
scalar URI

"""
A repository's open source license
"""
type License implements Node{
	"""
	The full text of the license
	"""
	body: String!
	"""
	The conditions set by the license
	"""
	conditions: [LicenseRule!]
	"""
	A human-readable description of the license
	"""
	description: String
	"""
	Whether the license should be featured
	"""
	featured: Boolean!
	"""
	Whether the license should be displayed in license pickers
	"""
	hidden: Boolean!
	id: ID!
	"""
	Instructions on how to implement the license
	"""
	implementation: String
	"""
	The lowercased SPDX ID of the license
	"""
	key: String!
	"""
	The limitations set by the license
	"""
	limitations: [LicenseRule!]
	"""
	The license full name specified by <https: spdx.org="" licenses=""></https:>
	"""
	name: String!
	"""
	Customary short name if applicable (e.g, GPLv3)
	"""
	nickname: String
	"""
	The permissions set by the license
	"""
	permissions: [LicenseRule!]
	"""
	Whether the license is a pseudo-license placeholder (e.g., other, no-license)
	"""
	pseudoLicense: Boolean!
	"""
	Short identifier specified by <https://spdx.org/licenses>
	"""
	spdxId: String
	"""
	URL to the license on <https://choosealicense.com>
	"""
	url: URI
}

"""
An object with an ID.
"""
interface Node{
	"""
	ID of the object.
	"""
	id: ID!
}

"""
Describes a License's conditions, permissions, and limitations
"""
type LicenseRule{
	"""
	A description of the rule
	"""
	description: String!
	"""
	The machine-readable rule key
	"""
	key: String!
	"""
	The human-readable rule label
	"""
	label: String!
}

"""
A public description of a Marketplace category.
"""
type MarketplaceCategory implements Node{
	"""
	The category's description.
	"""
	description: String
	"""
	The technical description of how apps listed in this category work with GitHub.
	"""
	howItWorks: String
	id: ID!
	"""
	The category's name.
	"""
	name: String!
	"""
	How many Marketplace listings have this as their primary category.
	"""
	primaryListingCount: Int!
	"""
	The HTTP path for this Marketplace category.
	"""
	resourcePath: URI!
	"""
	How many Marketplace listings have this as their secondary category.
	"""
	secondaryListingCount: Int!
	"""
	The short name of the category used in its URL.
	"""
	slug: String!
	"""
	The HTTP URL for this Marketplace category.
	"""
	url: URI!
}

"""
A listing in the GitHub integration marketplace.
"""
type MarketplaceListing implements Node{
	"""
	The GitHub App this listing represents.
	"""
	app: App
	"""
	URL to the listing owner's company site.
	"""
	companyUrl: URI
	"""
	The HTTP path for configuring access to the listing's integration or OAuth app
	"""
	configurationResourcePath: URI!
	"""
	The HTTP URL for configuring access to the listing's integration or OAuth app
	"""
	configurationUrl: URI!
	"""
	URL to the listing's documentation.
	"""
	documentationUrl: URI
	"""
	The listing's detailed description.
	"""
	extendedDescription: String
	"""
	The listing's detailed description rendered to HTML.
	"""
	extendedDescriptionHTML: HTML!
	"""
	The listing's introductory description.
	"""
	fullDescription: String!
	"""
	The listing's introductory description rendered to HTML.
	"""
	fullDescriptionHTML: HTML!
	"""
	Whether this listing has been submitted for review from GitHub for approval to be displayed in the Marketplace.
	"""
	hasApprovalBeenRequested: Boolean!
	"""
	Does this listing have any plans with a free trial?
	"""
	hasPublishedFreeTrialPlans: Boolean!
	"""
	Does this listing have a terms of service link?
	"""
	hasTermsOfService: Boolean!
	"""
	A technical description of how this app works with GitHub.
	"""
	howItWorks: String
	"""
	The listing's technical description rendered to HTML.
	"""
	howItWorksHTML: HTML!
	id: ID!
	"""
	URL to install the product to the viewer's account or organization.
	"""
	installationUrl: URI
	"""
	Whether this listing's app has been installed for the current viewer
	"""
	installedForViewer: Boolean!
	"""
	Whether this listing has been approved for display in the Marketplace.
	"""
	isApproved: Boolean!
	"""
	Whether this listing has been removed from the Marketplace.
	"""
	isDelisted: Boolean!
	"""
															Whether this listing is still an editable draft that has not been submitted
for review and is not publicly visible in the Marketplace.
	"""
	isDraft: Boolean!
	"""
	Whether the product this listing represents is available as part of a paid plan.
	"""
	isPaid: Boolean!
	"""
	Whether this listing has been rejected by GitHub for display in the Marketplace.
	"""
	isRejected: Boolean!
	"""
	The hex color code, without the leading '#', for the logo background.
	"""
	logoBackgroundColor: String!
	"""
	URL for the listing's logo image.
	"""
	logoUrl(
		size: Int = 400
	): URI
	"""
	The listing's full name.
	"""
	name: String!
	"""
	The listing's very short description without a trailing period or ampersands.
	"""
	normalizedShortDescription: String!
	"""
	URL to the listing's detailed pricing.
	"""
	pricingUrl: URI
	"""
	The category that best describes the listing.
	"""
	primaryCategory: MarketplaceCategory!
	"""
	URL to the listing's privacy policy.
	"""
	privacyPolicyUrl: URI!
	"""
	The HTTP path for the Marketplace listing.
	"""
	resourcePath: URI!
	"""
	The URLs for the listing's screenshots.
	"""
	screenshotUrls: [String!]
	"""
	An alternate category that describes the listing.
	"""
	secondaryCategory: MarketplaceCategory
	"""
	The listing's very short description.
	"""
	shortDescription: String!
	"""
	The short name of the listing used in its URL.
	"""
	slug: String!
	"""
	URL to the listing's status page.
	"""
	statusUrl: URI
	"""
	An email address for support for this listing's app.
	"""
	supportEmail: String
	"""
	Either a URL or an email address for support for this listing's app.
	"""
	supportUrl: URI!
	"""
	URL to the listing's terms of service.
	"""
	termsOfServiceUrl: URI
	"""
	The HTTP URL for the Marketplace listing.
	"""
	url: URI!
	"""
	Can the current viewer add plans for this Marketplace listing.
	"""
	viewerCanAddPlans: Boolean!
	"""
	Can the current viewer approve this Marketplace listing.
	"""
	viewerCanApprove: Boolean!
	"""
	Can the current viewer delist this Marketplace listing.
	"""
	viewerCanDelist: Boolean!
	"""
	Can the current viewer edit this Marketplace listing.
	"""
	viewerCanEdit: Boolean!
	"""
															Can the current viewer edit the primary and secondary category of this
Marketplace listing.
	"""
	viewerCanEditCategories: Boolean!
	"""
	Can the current viewer edit the plans for this Marketplace listing.
	"""
	viewerCanEditPlans: Boolean!
	"""
															Can the current viewer return this Marketplace listing to draft state
so it becomes editable again.
	"""
	viewerCanRedraft: Boolean!
	"""
															Can the current viewer reject this Marketplace listing by returning it to
an editable draft state or rejecting it entirely.
	"""
	viewerCanReject: Boolean!
	"""
															Can the current viewer request this listing be reviewed for display in
the Marketplace.
	"""
	viewerCanRequestApproval: Boolean!
	"""
	Indicates whether the current user has an active subscription to this Marketplace listing.
	"""
	viewerHasPurchased: Boolean!
	"""
															Indicates if the current user has purchased a subscription to this Marketplace listing
for all of the organizations the user owns.
	"""
	viewerHasPurchasedForAllOrganizations: Boolean!
	"""
	Does the current viewer role allow them to administer this Marketplace listing.
	"""
	viewerIsListingAdmin: Boolean!
}

"""
A GitHub App.
"""
type App implements Node{
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The description of the app.
	"""
	description: String
	id: ID!
	"""
	The hex color code, without the leading '#', for the logo background.
	"""
	logoBackgroundColor: String!
	"""
	A URL pointing to the app's logo.
	"""
	logoUrl(
		size: Int
	): URI!
	"""
	The name of the app.
	"""
	name: String!
	"""
	A slug based on the name of the app for use in URLs.
	"""
	slug: String!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The URL to the app's homepage.
	"""
	url: URI!
}

"""
An ISO-8601 encoded UTC date string.
"""
scalar DateTime

"""
A string containing HTML code.
"""
scalar HTML

"""
Look up Marketplace Listings
"""
type MarketplaceListingConnection{
	"""
	A list of edges.
	"""
	edges: [MarketplaceListingEdge]
	"""
	A list of nodes.
	"""
	nodes: [MarketplaceListing]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type MarketplaceListingEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: MarketplaceListing
}

"""
Information about pagination in a connection.
"""
type PageInfo{
	"""
	When paginating forwards, the cursor to continue.
	"""
	endCursor: String
	"""
	When paginating forwards, are there more items?
	"""
	hasNextPage: Boolean!
	"""
	When paginating backwards, are there more items?
	"""
	hasPreviousPage: Boolean!
	"""
	When paginating backwards, the cursor to continue.
	"""
	startCursor: String
}

"""
Represents information about the GitHub instance.
"""
type GitHubMetadata{
	"""
	Returns a String that's a SHA of \`github;-services\`
	"""
	gitHubServicesSha: GitObjectID!
	"""
	IP addresses that users connect to for git operations
	"""
	gitIpAddresses: [String!]
	"""
	IP addresses that service hooks are sent from
	"""
	hookIpAddresses: [String!]
	"""
	IP addresses that the importer connects from
	"""
	importerIpAddresses: [String!]
	"""
	Whether or not users are verified
	"""
	isPasswordAuthenticationVerifiable: Boolean!
	"""
	IP addresses for GitHub Pages' A records
	"""
	pagesIpAddresses: [String!]
}

"""
A Git object ID.
"""
scalar GitObjectID

"""
An account on GitHub, with one or more owners, that has repositories, members and teams.
"""
type Organization implements Actor & Node & ProjectOwner & RegistryPackageOwner & RegistryPackageSearch & RepositoryOwner & UniformResourceLocatable{
	"""
	A URL pointing to the organization's public avatar.
	"""
	avatarUrl(
		size: Int
	): URI!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The organization's public profile description.
	"""
	description: String
	"""
	The organization's public email.
	"""
	email: String
	id: ID!
	"""
	Whether the organization has verified its profile email and website.
	"""
	isVerified: Boolean!
	"""
	The organization's public profile location.
	"""
	location: String
	"""
	The organization's login name.
	"""
	login: String!
	"""
	A list of users who are members of this organization.
	"""
	members(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
	"""
	The organization's public profile name.
	"""
	name: String
	"""
	The HTTP path creating a new team
	"""
	newTeamResourcePath: URI!
	"""
	The HTTP URL creating a new team
	"""
	newTeamUrl: URI!
	"""
	The billing email for the organization.
	"""
	organizationBillingEmail: String
	"""
	A list of repositories this user has pinned to their profile
	"""
	pinnedRepositories(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR]
		after: String
		before: String
		first: Int
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	Find project by number.
	"""
	project(
		number: Int!
	): Project
	"""
	A list of projects under the owner.
	"""
	projects(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: ProjectOrder
		search: String
		states: [ProjectState!]
	): ProjectConnection!
	"""
	The HTTP path listing organization's projects
	"""
	projectsResourcePath: URI!
	"""
	The HTTP URL listing organization's projects
	"""
	projectsUrl: URI!
	"""
	A list of repositories that the user owns.
	"""
	repositories(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR]
		after: String
		before: String
		first: Int
		isFork: Boolean
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	Find Repository.
	"""
	repository(
		name: String!
	): Repository
	"""
															When true the organization requires all members, billing managers, and outside
collaborators to enable two-factor authentication.
	"""
	requiresTwoFactorAuthentication: Boolean
	"""
	The HTTP path for this organization.
	"""
	resourcePath: URI!
	"""
	The Organization's SAML Identity Providers
	"""
	samlIdentityProvider: OrganizationIdentityProvider
	"""
	Find an organization's team by its slug.
	"""
	team(
		slug: String!
	): Team
	"""
	A list of teams in this organization.
	"""
	teams(
		after: String
		before: String
		first: Int
		last: Int
		ldapMapped: Boolean
		orderBy: TeamOrder
		privacy: TeamPrivacy
		query: String
		role: TeamRole
		rootTeamsOnly: Boolean = false
		userLogins: [String!]
	): TeamConnection!
	"""
	The HTTP path listing organization's teams
	"""
	teamsResourcePath: URI!
	"""
	The HTTP URL listing organization's teams
	"""
	teamsUrl: URI!
	"""
	The HTTP URL for this organization.
	"""
	url: URI!
	"""
	Organization is adminable by the viewer.
	"""
	viewerCanAdminister: Boolean!
	"""
	Can the current viewer create new projects on this owner.
	"""
	viewerCanCreateProjects: Boolean!
	"""
	Viewer can create repositories on this organization
	"""
	viewerCanCreateRepositories: Boolean!
	"""
	Viewer can create teams on this organization.
	"""
	viewerCanCreateTeams: Boolean!
	"""
	Viewer is an active member of this organization.
	"""
	viewerIsAMember: Boolean!
	"""
	The organization's public profile URL.
	"""
	websiteUrl: URI
}

"""
Represents an object which can take actions on GitHub. Typically a User or Bot.
"""
interface Actor{
	"""
	A URL pointing to the actor's public avatar.
	"""
	avatarUrl(
		size: Int
	): URI!
	"""
	The username of the actor.
	"""
	login: String!
	"""
	The HTTP path for this actor.
	"""
	resourcePath: URI!
	"""
	The HTTP URL for this actor.
	"""
	url: URI!
}

"""
Represents an owner of a Project.
"""
interface ProjectOwner{
	id: ID!
	"""
	Find project by number.
	"""
	project(
		number: Int!
	): Project
	"""
	A list of projects under the owner.
	"""
	projects(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: ProjectOrder
		search: String
		states: [ProjectState!]
	): ProjectConnection!
	"""
	The HTTP path listing owners projects
	"""
	projectsResourcePath: URI!
	"""
	The HTTP URL listing owners projects
	"""
	projectsUrl: URI!
	"""
	Can the current viewer create new projects on this owner.
	"""
	viewerCanCreateProjects: Boolean!
}

"""
Projects manage issues, pull requests and notes within a project owner.
"""
type Project implements Closable & Node & Updatable{
	"""
	The project's description body.
	"""
	body: String
	"""
	The projects description body rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	\`;true\` if the object is closed (definition of closed may depend on type)
	"""
	closed: Boolean!
	"""
	Identifies the date and time when the object was closed.
	"""
	closedAt: DateTime
	"""
	List of columns in the project
	"""
	columns(
		after: String
		before: String
		first: Int
		last: Int
	): ProjectColumnConnection!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The actor who originally created the project.
	"""
	creator: Actor
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	The project's name.
	"""
	name: String!
	"""
	The project's number.
	"""
	number: Int!
	"""
	The project's owner. Currently limited to repositories and organizations.
	"""
	owner: ProjectOwner!
	"""
	List of pending cards in this project
	"""
	pendingCards(
		after: String
		archivedStates: [ProjectCardArchivedState] = [ARCHIVED,
NOT_ARCHIVED]
		before: String
		first: Int
		last: Int
	): ProjectCardConnection!
	"""
	The HTTP path for this project
	"""
	resourcePath: URI!
	"""
	Whether the project is open or closed.
	"""
	state: ProjectState!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this project
	"""
	url: URI!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
}

"""
An object that can be closed
"""
interface Closable{
	"""
	\`;true\` if the object is closed (definition of closed may depend on type)
	"""
	closed: Boolean!
	"""
	Identifies the date and time when the object was closed.
	"""
	closedAt: DateTime
}

"""
Entities that can be updated.
"""
interface Updatable{
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
}

"""
The connection type for ProjectColumn.
"""
type ProjectColumnConnection{
	"""
	A list of edges.
	"""
	edges: [ProjectColumnEdge]
	"""
	A list of nodes.
	"""
	nodes: [ProjectColumn]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ProjectColumnEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: ProjectColumn
}

"""
A column inside a project.
"""
type ProjectColumn implements Node{
	"""
	List of cards in the column
	"""
	cards(
		after: String
		archivedStates: [ProjectCardArchivedState] = [ARCHIVED,
NOT_ARCHIVED]
		before: String
		first: Int
		last: Int
	): ProjectCardConnection!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	The project column's name.
	"""
	name: String!
	"""
	The project that contains this column.
	"""
	project: Project!
	"""
	The semantic purpose of the column
	"""
	purpose: ProjectColumnPurpose
	"""
	The HTTP path for this project column
	"""
	resourcePath: URI!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this project column
	"""
	url: URI!
}

"""
The possible archived states of a project card.
"""
enum ProjectCardArchivedState{
	"""
	A project card that is archived
	"""
	ARCHIVED
	"""
	A project card that is not archived
	"""
	NOT_ARCHIVED
}

"""
The connection type for ProjectCard.
"""
type ProjectCardConnection{
	"""
	A list of edges.
	"""
	edges: [ProjectCardEdge]
	"""
	A list of nodes.
	"""
	nodes: [ProjectCard]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ProjectCardEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: ProjectCard
}

"""
A card in a project.
"""
type ProjectCard implements Node{
	"""
															The project column this card is associated under. A card may only belong to one
project column at a time. The column field will be null if the card is created
in a pending state and has yet to be associated with a column. Once cards are
associated with a column, they will not become pending in the future.
	"""
	column: ProjectColumn
	"""
	The card content item
	"""
	content: ProjectCardItem
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The actor who created this card
	"""
	creator: Actor
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	Whether the card is archived
	"""
	isArchived: Boolean!
	"""
	The card note
	"""
	note: String
	"""
	The project that contains this card.
	"""
	project: Project!
	"""
	The HTTP path for this card
	"""
	resourcePath: URI!
	"""
	The state of ProjectCard
	"""
	state: ProjectCardState
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this card
	"""
	url: URI!
}

"""
Types that can be inside Project Cards.
"""
union ProjectCardItem = Issue | PullRequest

"""
An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project.
"""
type Issue implements Assignable & Closable & Comment & Labelable & Lockable & Node & Reactable & RepositoryNode & Subscribable & UniformResourceLocatable & Updatable & UpdatableComment{
	"""
	Reason that the conversation was locked.
	"""
	activeLockReason: LockReason
	"""
	A list of Users assigned to this object.
	"""
	assignees(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the subject of the comment.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	Identifies the body of the issue.
	"""
	body: String!
	"""
	Identifies the body of the issue rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	Identifies the body of the issue rendered to text.
	"""
	bodyText: String!
	"""
	\`;true\` if the object is closed (definition of closed may depend on type)
	"""
	closed: Boolean!
	"""
	Identifies the date and time when the object was closed.
	"""
	closedAt: DateTime
	"""
	A list of comments associated with the Issue.
	"""
	comments(
		after: String
		before: String
		first: Int
		last: Int
	): IssueCommentConnection!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The actor who edited the comment.
	"""
	editor: Actor
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	A list of labels associated with the object.
	"""
	labels(
		after: String
		before: String
		first: Int
		last: Int
	): LabelConnection
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	\`;true\` if the object is locked
	"""
	locked: Boolean!
	"""
	Identifies the milestone associated with the issue.
	"""
	milestone: Milestone
	"""
	Identifies the issue number.
	"""
	number: Int!
	"""
	A list of Users that are participating in the Issue conversation.
	"""
	participants(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
	"""
	List of project cards associated with this issue.
	"""
	projectCards(
		after: String
		archivedStates: [ProjectCardArchivedState] = [ARCHIVED,
NOT_ARCHIVED]
		before: String
		first: Int
		last: Int
	): ProjectCardConnection!
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
	A list of reactions grouped by content left on the subject.
	"""
	reactionGroups: [ReactionGroup!]
	"""
	A list of Reactions left on the Issue.
	"""
	reactions(
		after: String
		before: String
		content: ReactionContent
		first: Int
		last: Int
		orderBy: ReactionOrder
	): ReactionConnection!
	"""
	The repository associated with this node.
	"""
	repository: Repository!
	"""
	The HTTP path for this issue
	"""
	resourcePath: URI!
	"""
	Identifies the state of the issue.
	"""
	state: IssueState!
	"""
	A list of events, comments, commits, etc. associated with the issue.
	"""
	timeline(
		after: String
		before: String
		first: Int
		last: Int
		since: DateTime
	): IssueTimelineConnection!
	"""
	Identifies the issue title.
	"""
	title: String!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this issue
	"""
	url: URI!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Can user react to this subject
	"""
	viewerCanReact: Boolean!
	"""
	Check if the viewer is able to change their subscription status for the repository.
	"""
	viewerCanSubscribe: Boolean!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
	"""
	Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
	"""
	viewerSubscription: SubscriptionState
}

"""
An object that can have users assigned to it.
"""
interface Assignable{
	"""
	A list of Users assigned to this object.
	"""
	assignees(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
}

"""
The connection type for User.
"""
type UserConnection{
	"""
	A list of edges.
	"""
	edges: [UserEdge]
	"""
	A list of nodes.
	"""
	nodes: [User]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type UserEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: User
}

"""
A user is an individual's account on GitHub that owns repositories and can make new content.
"""
type User implements Actor & Node & RegistryPackageOwner & RegistryPackageSearch & RepositoryOwner & UniformResourceLocatable{
	"""
	A URL pointing to the user's public avatar.
	"""
	avatarUrl(
		size: Int
	): URI!
	"""
	The user's public profile bio.
	"""
	bio: String
	"""
	The user's public profile bio as HTML.
	"""
	bioHTML: HTML!
	"""
	A list of commit comments made by this user.
	"""
	commitComments(
		after: String
		before: String
		first: Int
		last: Int
	): CommitCommentConnection!
	"""
	The user's public profile company.
	"""
	company: String
	"""
	The user's public profile company as HTML.
	"""
	companyHTML: HTML!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The user's publicly visible profile email.
	"""
	email: String!
	"""
	A list of users the given user is followed by.
	"""
	followers(
		after: String
		before: String
		first: Int
		last: Int
	): FollowerConnection!
	"""
	A list of users the given user is following.
	"""
	following(
		after: String
		before: String
		first: Int
		last: Int
	): FollowingConnection!
	"""
	Find gist by repo name.
	"""
	gist(
		name: String!
	): Gist
	"""
	A list of gist comments made by this user.
	"""
	gistComments(
		after: String
		before: String
		first: Int
		last: Int
	): GistCommentConnection!
	"""
	A list of the Gists the user has created.
	"""
	gists(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: GistOrder
		privacy: GistPrivacy
	): GistConnection!
	id: ID!
	"""
	Whether or not this user is a participant in the GitHub Security Bug Bounty.
	"""
	isBountyHunter: Boolean!
	"""
	Whether or not this user is a participant in the GitHub Campus Experts Program.
	"""
	isCampusExpert: Boolean!
	"""
	Whether or not this user is a GitHub Developer Program member.
	"""
	isDeveloperProgramMember: Boolean!
	"""
	Whether or not this user is a GitHub employee.
	"""
	isEmployee: Boolean!
	"""
	Whether or not the user has marked themselves as for hire.
	"""
	isHireable: Boolean!
	"""
	Whether or not this user is a site administrator.
	"""
	isSiteAdmin: Boolean!
	"""
	Whether or not this user is the viewing user.
	"""
	isViewer: Boolean!
	"""
	A list of issue comments made by this user.
	"""
	issueComments(
		after: String
		before: String
		first: Int
		last: Int
	): IssueCommentConnection!
	"""
	A list of issues associated with this user.
	"""
	issues(
		after: String
		before: String
		first: Int
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [IssueState!]
	): IssueConnection!
	"""
	The user's public profile location.
	"""
	location: String
	"""
	The username used to login.
	"""
	login: String!
	"""
	The user's public profile name.
	"""
	name: String
	"""
	Find an organization by its login that the user belongs to.
	"""
	organization(
		login: String!
	): Organization
	"""
	A list of organizations the user belongs to.
	"""
	organizations(
		after: String
		before: String
		first: Int
		last: Int
	): OrganizationConnection!
	"""
	A list of repositories this user has pinned to their profile
	"""
	pinnedRepositories(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR]
		after: String
		before: String
		first: Int
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	A list of public keys associated with this user.
	"""
	publicKeys(
		after: String
		before: String
		first: Int
		last: Int
	): PublicKeyConnection!
	"""
	A list of pull requests associated with this user.
	"""
	pullRequests(
		after: String
		baseRefName: String
		before: String
		first: Int
		headRefName: String
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [PullRequestState!]
	): PullRequestConnection!
	"""
	A list of repositories that the user owns.
	"""
	repositories(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR]
		after: String
		before: String
		first: Int
		isFork: Boolean
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	A list of repositories that the user recently contributed to.
	"""
	repositoriesContributedTo(
		after: String
		before: String
		contributionTypes: [RepositoryContributionType]
		first: Int
		includeUserRepositories: Boolean
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	Find Repository.
	"""
	repository(
		name: String!
	): Repository
	"""
	The HTTP path for this user
	"""
	resourcePath: URI!
	"""
	Repositories the user has starred.
	"""
	starredRepositories(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: StarOrder
		ownedByViewer: Boolean
	): StarredRepositoryConnection!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this user
	"""
	url: URI!
	"""
	Whether or not the viewer is able to follow the user.
	"""
	viewerCanFollow: Boolean!
	"""
	Whether or not this user is followed by the viewer.
	"""
	viewerIsFollowing: Boolean!
	"""
	A list of repositories the given user is watching.
	"""
	watching(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR,
ORGANIZATION_MEMBER]
		after: String
		before: String
		first: Int
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	A URL pointing to the user's public website/blog.
	"""
	websiteUrl: URI
}

"""
Represents an owner of a registry package.
"""
interface RegistryPackageOwner{
	id: ID!
}

"""
Represents an interface to search packages on an object.
"""
interface RegistryPackageSearch{
	id: ID!
}

"""
Represents an owner of a Repository.
"""
interface RepositoryOwner{
	"""
	A URL pointing to the owner's public avatar.
	"""
	avatarUrl(
		size: Int
	): URI!
	id: ID!
	"""
	The username used to login.
	"""
	login: String!
	"""
	A list of repositories this user has pinned to their profile
	"""
	pinnedRepositories(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR]
		after: String
		before: String
		first: Int
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	A list of repositories that the user owns.
	"""
	repositories(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR]
		after: String
		before: String
		first: Int
		isFork: Boolean
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	Find Repository.
	"""
	repository(
		name: String!
	): Repository
	"""
	The HTTP URL for the owner.
	"""
	resourcePath: URI!
	"""
	The HTTP URL for the owner.
	"""
	url: URI!
}

"""
The affiliation of a user to a repository
"""
enum RepositoryAffiliation{
	"""
	Repositories that the user has been added to as a collaborator.
	"""
	COLLABORATOR
	"""
															Repositories that the user has access to through being a member of an
organization. This includes every repository on every team that the user is on.
	"""
	ORGANIZATION_MEMBER
	"""
	Repositories that are owned by the authenticated user.
	"""
	OWNER
}

"""
Ordering options for repository connections
"""
input RepositoryOrder{
	"""
	The ordering direction.
	"""
	direction: OrderDirection!
	"""
	The field to order repositories by.
	"""
	field: RepositoryOrderField!
}

"""
Possible directions in which to order a list of items when provided an \`;orderBy\` argument.
"""
enum OrderDirection{
	"""
	Specifies an ascending order for a given \`;orderBy\` argument.
	"""
	ASC
	"""
	Specifies a descending order for a given \`;orderBy\` argument.
	"""
	DESC
}

"""
Properties by which repository connections can be ordered.
"""
enum RepositoryOrderField{
	"""
	Order repositories by creation time
	"""
	CREATED_AT
	"""
	Order repositories by name
	"""
	NAME
	"""
	Order repositories by push time
	"""
	PUSHED_AT
	"""
	Order repositories by number of stargazers
	"""
	STARGAZERS
	"""
	Order repositories by update time
	"""
	UPDATED_AT
}

"""
The privacy of a repository
"""
enum RepositoryPrivacy{
	"""
	Private
	"""
	PRIVATE
	"""
	Public
	"""
	PUBLIC
}

"""
A list of repositories owned by the subject.
"""
type RepositoryConnection{
	"""
	A list of edges.
	"""
	edges: [RepositoryEdge]
	"""
	A list of nodes.
	"""
	nodes: [Repository]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
	"""
	The total size in kilobytes of all repositories in the connection.
	"""
	totalDiskUsage: Int!
}

"""
An edge in a connection.
"""
type RepositoryEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Repository
}

"""
A repository contains the content for a project.
"""
type Repository implements Node & ProjectOwner & RegistryPackageOwner & RepositoryInfo & Starrable & Subscribable & UniformResourceLocatable{
	"""
	A list of users that can be assigned to issues in this repository.
	"""
	assignableUsers(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
	"""
	Returns the code of conduct for this repository
	"""
	codeOfConduct: CodeOfConduct
	"""
	A list of collaborators associated with the repository.
	"""
	collaborators(
		affiliation: CollaboratorAffiliation
		after: String
		before: String
		first: Int
		last: Int
	): RepositoryCollaboratorConnection
	"""
	A list of commit comments associated with the repository.
	"""
	commitComments(
		after: String
		before: String
		first: Int
		last: Int
	): CommitCommentConnection!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The Ref associated with the repository's default branch.
	"""
	defaultBranchRef: Ref
	"""
	A list of deploy keys that are on this repository.
	"""
	deployKeys(
		after: String
		before: String
		first: Int
		last: Int
	): DeployKeyConnection!
	"""
	Deployments associated with the repository
	"""
	deployments(
		after: String
		before: String
		environments: [String!]
		first: Int
		last: Int
	): DeploymentConnection!
	"""
	The description of the repository.
	"""
	description: String
	"""
	The description of the repository rendered to HTML.
	"""
	descriptionHTML: HTML!
	"""
	The number of kilobytes this repository occupies on disk.
	"""
	diskUsage: Int
	"""
	Returns how many forks there are of this repository in the whole network.
	"""
	forkCount: Int!
	"""
	A list of direct forked repositories.
	"""
	forks(
		affiliations: [RepositoryAffiliation] = [OWNER,
COLLABORATOR]
		after: String
		before: String
		first: Int
		isLocked: Boolean
		last: Int
		orderBy: RepositoryOrder
		privacy: RepositoryPrivacy
	): RepositoryConnection!
	"""
	Indicates if the repository has issues feature enabled.
	"""
	hasIssuesEnabled: Boolean!
	"""
	Indicates if the repository has wiki feature enabled.
	"""
	hasWikiEnabled: Boolean!
	"""
	The repository's URL.
	"""
	homepageUrl: URI
	id: ID!
	"""
	Indicates if the repository is unmaintained.
	"""
	isArchived: Boolean!
	"""
	Identifies if the repository is a fork.
	"""
	isFork: Boolean!
	"""
	Indicates if the repository has been locked or not.
	"""
	isLocked: Boolean!
	"""
	Identifies if the repository is a mirror.
	"""
	isMirror: Boolean!
	"""
	Identifies if the repository is private.
	"""
	isPrivate: Boolean!
	"""
	Returns a single issue from the current repository by number.
	"""
	issue(
		number: Int!
	): Issue
	"""
	Returns a single issue-like object from the current repository by number.
	"""
	issueOrPullRequest(
		number: Int!
	): IssueOrPullRequest
	"""
	A list of issues that have been opened in the repository.
	"""
	issues(
		after: String
		before: String
		first: Int
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [IssueState!]
	): IssueConnection!
	"""
	Returns a single label by name
	"""
	label(
		name: String!
	): Label
	"""
	A list of labels associated with the repository.
	"""
	labels(
		after: String
		before: String
		first: Int
		last: Int
		query: String
	): LabelConnection
	"""
	A list containing a breakdown of the language composition of the repository.
	"""
	languages(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: LanguageOrder
	): LanguageConnection
	"""
	The license associated with the repository
	"""
	licenseInfo: License
	"""
	The reason the repository has been locked.
	"""
	lockReason: RepositoryLockReason
	"""
	A list of Users that can be mentioned in the context of the repository.
	"""
	mentionableUsers(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
	"""
	Whether or not PRs are merged with a merge commit on this repository.
	"""
	mergeCommitAllowed: Boolean!
	"""
	Returns a single milestone from the current repository by number.
	"""
	milestone(
		number: Int!
	): Milestone
	"""
	A list of milestones associated with the repository.
	"""
	milestones(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: MilestoneOrder
		states: [MilestoneState!]
	): MilestoneConnection
	"""
	The repository's original mirror URL.
	"""
	mirrorUrl: URI
	"""
	The name of the repository.
	"""
	name: String!
	"""
	The repository's name with owner.
	"""
	nameWithOwner: String!
	"""
	A Git object in the repository
	"""
	object(
		expression: String
		oid: GitObjectID
	): GitObject
	"""
	The User owner of the repository.
	"""
	owner: RepositoryOwner!
	"""
	The repository parent, if this is a fork.
	"""
	parent: Repository
	"""
	The primary language of the repository's code.
	"""
	primaryLanguage: Language
	"""
	Find project by number.
	"""
	project(
		number: Int!
	): Project
	"""
	A list of projects under the owner.
	"""
	projects(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: ProjectOrder
		search: String
		states: [ProjectState!]
	): ProjectConnection!
	"""
	The HTTP path listing the repository's projects
	"""
	projectsResourcePath: URI!
	"""
	The HTTP URL listing the repository's projects
	"""
	projectsUrl: URI!
	"""
	A list of protected branches that are on this repository.
	"""
	protectedBranches(
		after: String
		before: String
		first: Int
		last: Int
	): ProtectedBranchConnection!
	"""
	Returns a single pull request from the current repository by number.
	"""
	pullRequest(
		number: Int!
	): PullRequest
	"""
	A list of pull requests that have been opened in the repository.
	"""
	pullRequests(
		after: String
		baseRefName: String
		before: String
		first: Int
		headRefName: String
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [PullRequestState!]
	): PullRequestConnection!
	"""
	Identifies when the repository was last pushed to.
	"""
	pushedAt: DateTime
	"""
	Whether or not rebase-merging is enabled on this repository.
	"""
	rebaseMergeAllowed: Boolean!
	"""
	Fetch a given ref from the repository
	"""
	ref(
		qualifiedName: String!
	): Ref
	"""
	Fetch a list of refs from the repository
	"""
	refs(
		after: String
		before: String
		direction: OrderDirection
		first: Int
		last: Int
		orderBy: RefOrder
		refPrefix: String!
	): RefConnection
	"""
	Lookup a single release given various criteria.
	"""
	release(
		tagName: String!
	): Release
	"""
	List of releases which are dependent on this repository.
	"""
	releases(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: ReleaseOrder
	): ReleaseConnection!
	"""
	A list of applied repository-topic associations for this repository.
	"""
	repositoryTopics(
		after: String
		before: String
		first: Int
		last: Int
	): RepositoryTopicConnection!
	"""
	The HTTP path for this repository
	"""
	resourcePath: URI!
	"""
	A description of the repository, rendered to HTML without any links in it.
	"""
	shortDescriptionHTML(
		limit: Int = 200
	): HTML!
	"""
	Whether or not squash-merging is enabled on this repository.
	"""
	squashMergeAllowed: Boolean!
	"""
	The SSH URL to clone this repository
	"""
	sshUrl: GitSSHRemote!
	"""
	A list of users who have starred this starrable.
	"""
	stargazers(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: StarOrder
	): StargazerConnection!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this repository
	"""
	url: URI!
	"""
	Indicates whether the viewer has admin permissions on this repository.
	"""
	viewerCanAdminister: Boolean!
	"""
	Can the current viewer create new projects on this owner.
	"""
	viewerCanCreateProjects: Boolean!
	"""
	Check if the viewer is able to change their subscription status for the repository.
	"""
	viewerCanSubscribe: Boolean!
	"""
	Indicates whether the viewer can update the topics of this repository.
	"""
	viewerCanUpdateTopics: Boolean!
	"""
	Returns a boolean indicating whether the viewing user has starred this starrable.
	"""
	viewerHasStarred: Boolean!
	"""
	The users permission level on the repository. Will return null if authenticated as an GitHub App.
	"""
	viewerPermission: RepositoryPermission
	"""
	Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
	"""
	viewerSubscription: SubscriptionState
	"""
	A list of users watching the repository.
	"""
	watchers(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
}

"""
A subset of repository info.
"""
interface RepositoryInfo{
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The description of the repository.
	"""
	description: String
	"""
	The description of the repository rendered to HTML.
	"""
	descriptionHTML: HTML!
	"""
	Returns how many forks there are of this repository in the whole network.
	"""
	forkCount: Int!
	"""
	Indicates if the repository has issues feature enabled.
	"""
	hasIssuesEnabled: Boolean!
	"""
	Indicates if the repository has wiki feature enabled.
	"""
	hasWikiEnabled: Boolean!
	"""
	The repository's URL.
	"""
	homepageUrl: URI
	"""
	Indicates if the repository is unmaintained.
	"""
	isArchived: Boolean!
	"""
	Identifies if the repository is a fork.
	"""
	isFork: Boolean!
	"""
	Indicates if the repository has been locked or not.
	"""
	isLocked: Boolean!
	"""
	Identifies if the repository is a mirror.
	"""
	isMirror: Boolean!
	"""
	Identifies if the repository is private.
	"""
	isPrivate: Boolean!
	"""
	The license associated with the repository
	"""
	licenseInfo: License
	"""
	The reason the repository has been locked.
	"""
	lockReason: RepositoryLockReason
	"""
	The repository's original mirror URL.
	"""
	mirrorUrl: URI
	"""
	The name of the repository.
	"""
	name: String!
	"""
	The repository's name with owner.
	"""
	nameWithOwner: String!
	"""
	The User owner of the repository.
	"""
	owner: RepositoryOwner!
	"""
	Identifies when the repository was last pushed to.
	"""
	pushedAt: DateTime
	"""
	The HTTP path for this repository
	"""
	resourcePath: URI!
	"""
	A description of the repository, rendered to HTML without any links in it.
	"""
	shortDescriptionHTML(
		limit: Int = 200
	): HTML!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this repository
	"""
	url: URI!
}

"""
The possible reasons a given repository could be in a locked state.
"""
enum RepositoryLockReason{
	"""
	The repository is locked due to a billing related reason.
	"""
	BILLING
	"""
	The repository is locked due to a migration.
	"""
	MIGRATING
	"""
	The repository is locked due to a move.
	"""
	MOVING
	"""
	The repository is locked due to a rename.
	"""
	RENAME
}

"""
Things that can be starred.
"""
interface Starrable{
	id: ID!
	"""
	A list of users who have starred this starrable.
	"""
	stargazers(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: StarOrder
	): StargazerConnection!
	"""
	Returns a boolean indicating whether the viewing user has starred this starrable.
	"""
	viewerHasStarred: Boolean!
}

"""
Ways in which star connections can be ordered.
"""
input StarOrder{
	"""
	The direction in which to order nodes.
	"""
	direction: OrderDirection!
	"""
	The field in which to order nodes by.
	"""
	field: StarOrderField!
}

"""
Properties by which star connections can be ordered.
"""
enum StarOrderField{
	"""
	Allows ordering a list of stars by when they were created.
	"""
	STARRED_AT
}

"""
The connection type for User.
"""
type StargazerConnection{
	"""
	A list of edges.
	"""
	edges: [StargazerEdge]
	"""
	A list of nodes.
	"""
	nodes: [User]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
Represents a user that's starred a repository.
"""
type StargazerEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	node: User!
	"""
	Identifies when the item was starred.
	"""
	starredAt: DateTime!
}

"""
Entities that can be subscribed to for web and email notifications.
"""
interface Subscribable{
	id: ID!
	"""
	Check if the viewer is able to change their subscription status for the repository.
	"""
	viewerCanSubscribe: Boolean!
	"""
	Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
	"""
	viewerSubscription: SubscriptionState
}

"""
The possible states of a subscription.
"""
enum SubscriptionState{
	"""
	The User is never notified.
	"""
	IGNORED
	"""
	The User is notified of all conversations.
	"""
	SUBSCRIBED
	"""
	The User is only notified when particpating or @mentioned.
	"""
	UNSUBSCRIBED
}

"""
Represents a type that can be retrieved by a URL.
"""
interface UniformResourceLocatable{
	"""
	The HTML path to this resource.
	"""
	resourcePath: URI!
	"""
	The URL to this resource.
	"""
	url: URI!
}

"""
Collaborators affiliation level with a subject.
"""
enum CollaboratorAffiliation{
	"""
	All collaborators the authenticated user can see.
	"""
	ALL
	"""
	All collaborators with permissions to an organization-owned subject, regardless of organization membership status.
	"""
	DIRECT
	"""
	All outside collaborators of an organization-owned subject.
	"""
	OUTSIDE
}

"""
The connection type for User.
"""
type RepositoryCollaboratorConnection{
	"""
	A list of edges.
	"""
	edges: [RepositoryCollaboratorEdge]
	"""
	A list of nodes.
	"""
	nodes: [User]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
Represents a user who is a collaborator of a repository.
"""
type RepositoryCollaboratorEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	node: User!
	"""
	The permission the user has on the repository.
	"""
	permission: RepositoryPermission!
}

"""
The access level to a repository
"""
enum RepositoryPermission{
	"""
	Can read, clone, push, and add collaborators
	"""
	ADMIN
	"""
	Can read and clone
	"""
	READ
	"""
	Can read, clone and push
	"""
	WRITE
}

"""
The connection type for CommitComment.
"""
type CommitCommentConnection{
	"""
	A list of edges.
	"""
	edges: [CommitCommentEdge]
	"""
	A list of nodes.
	"""
	nodes: [CommitComment]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type CommitCommentEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: CommitComment
}

"""
Represents a comment on a given Commit.
"""
type CommitComment implements Comment & Deletable & Node & Reactable & RepositoryNode & Updatable & UpdatableComment{
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the subject of the comment.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	Identifies the comment body.
	"""
	body: String!
	"""
	Identifies the comment body rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	The body rendered to text.
	"""
	bodyText: String!
	"""
	Identifies the commit associated with the comment, if the commit exists.
	"""
	commit: Commit
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The actor who edited the comment.
	"""
	editor: Actor
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	Identifies the file path associated with the comment.
	"""
	path: String
	"""
	Identifies the line position associated with the comment.
	"""
	position: Int
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
	A list of reactions grouped by content left on the subject.
	"""
	reactionGroups: [ReactionGroup!]
	"""
	A list of Reactions left on the Issue.
	"""
	reactions(
		after: String
		before: String
		content: ReactionContent
		first: Int
		last: Int
		orderBy: ReactionOrder
	): ReactionConnection!
	"""
	The repository associated with this node.
	"""
	repository: Repository!
	"""
	The HTTP path permalink for this commit comment.
	"""
	resourcePath: URI!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL permalink for this commit comment.
	"""
	url: URI!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Check if the current viewer can delete this object.
	"""
	viewerCanDelete: Boolean!
	"""
	Can user react to this subject
	"""
	viewerCanReact: Boolean!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
}

"""
Represents a comment.
"""
interface Comment{
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the subject of the comment.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	The body as Markdown.
	"""
	body: String!
	"""
	The body rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	The body rendered to text.
	"""
	bodyText: String!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	The actor who edited the comment.
	"""
	editor: Actor
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
}

"""
A comment author association with repository.
"""
enum CommentAuthorAssociation{
	"""
	Author has been invited to collaborate on the repository.
	"""
	COLLABORATOR
	"""
	Author has previously committed to the repository.
	"""
	CONTRIBUTOR
	"""
	Author has not previously committed to GitHub.
	"""
	FIRST_TIMER
	"""
	Author has not previously committed to the repository.
	"""
	FIRST_TIME_CONTRIBUTOR
	"""
	Author is a member of the organization that owns the repository.
	"""
	MEMBER
	"""
	Author has no association with the repository.
	"""
	NONE
	"""
	Author is the owner of the repository.
	"""
	OWNER
}

"""
A list of edits to content.
"""
type UserContentEditConnection{
	"""
	A list of edges.
	"""
	edges: [UserContentEditEdge]
	"""
	A list of nodes.
	"""
	nodes: [UserContentEdit]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type UserContentEditEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: UserContentEdit
}

"""
An edit on user content
"""
type UserContentEdit implements Node{
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the date and time when the object was deleted.
	"""
	deletedAt: DateTime
	"""
	The actor who deleted this content
	"""
	deletedBy: Actor
	"""
	A summary of the changes for this edit
	"""
	diff: String
	"""
	When this content was edited
	"""
	editedAt: DateTime!
	"""
	The actor who edited this content
	"""
	editor: Actor
	id: ID!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
}

"""
Entities that can be deleted.
"""
interface Deletable{
	"""
	Check if the current viewer can delete this object.
	"""
	viewerCanDelete: Boolean!
}

"""
Represents a subject that can be reacted on.
"""
interface Reactable{
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	A list of reactions grouped by content left on the subject.
	"""
	reactionGroups: [ReactionGroup!]
	"""
	A list of Reactions left on the Issue.
	"""
	reactions(
		after: String
		before: String
		content: ReactionContent
		first: Int
		last: Int
		orderBy: ReactionOrder
	): ReactionConnection!
	"""
	Can user react to this subject
	"""
	viewerCanReact: Boolean!
}

"""
A group of emoji reactions to a particular piece of content.
"""
type ReactionGroup{
	"""
	Identifies the emoji reaction.
	"""
	content: ReactionContent!
	"""
	Identifies when the reaction was created.
	"""
	createdAt: DateTime
	"""
	The subject that was reacted to.
	"""
	subject: Reactable!
	"""
	Users who have reacted to the reaction subject with the emotion represented by this reaction group
	"""
	users(
		after: String
		before: String
		first: Int
		last: Int
	): ReactingUserConnection!
	"""
	Whether or not the authenticated user has left a reaction on the subject.
	"""
	viewerHasReacted: Boolean!
}

"""
Emojis that can be attached to Issues, Pull Requests and Comments.
"""
enum ReactionContent{
	"""
	Represents the 😕 emoji.
	"""
	CONFUSED
	"""
	Represents the ❤️ emoji.
	"""
	HEART
	"""
	Represents the 🎉 emoji.
	"""
	HOORAY
	"""
	Represents the 😄 emoji.
	"""
	LAUGH
	"""
	Represents the 👎 emoji.
	"""
	THUMBS_DOWN
	"""
	Represents the 👍 emoji.
	"""
	THUMBS_UP
}

"""
The connection type for User.
"""
type ReactingUserConnection{
	"""
	A list of edges.
	"""
	edges: [ReactingUserEdge]
	"""
	A list of nodes.
	"""
	nodes: [User]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
Represents a user that's made a reaction.
"""
type ReactingUserEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	node: User!
	"""
	The moment when the user made the reaction.
	"""
	reactedAt: DateTime!
}

"""
Ways in which lists of reactions can be ordered upon return.
"""
input ReactionOrder{
	"""
	The direction in which to order reactions by the specified field.
	"""
	direction: OrderDirection!
	"""
	The field in which to order reactions by.
	"""
	field: ReactionOrderField!
}

"""
A list of fields that reactions can be ordered by.
"""
enum ReactionOrderField{
	"""
	Allows ordering a list of reactions by when they were created.
	"""
	CREATED_AT
}

"""
A list of reactions that have been left on the subject.
"""
type ReactionConnection{
	"""
	A list of edges.
	"""
	edges: [ReactionEdge]
	"""
	A list of nodes.
	"""
	nodes: [Reaction]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
	"""
	Whether or not the authenticated user has left a reaction on the subject.
	"""
	viewerHasReacted: Boolean!
}

"""
An edge in a connection.
"""
type ReactionEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Reaction
}

"""
An emoji reaction to a particular piece of content.
"""
type Reaction implements Node{
	"""
	Identifies the emoji reaction.
	"""
	content: ReactionContent!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	The reactable piece of content
	"""
	reactable: Reactable!
	"""
	Identifies the user who created this reaction.
	"""
	user: User
}

"""
Represents a object that belongs to a repository.
"""
interface RepositoryNode{
	"""
	The repository associated with this node.
	"""
	repository: Repository!
}

"""
Comments that can be updated.
"""
interface UpdatableComment{
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
}

"""
The possible errors that will prevent a user from updating a comment.
"""
enum CommentCannotUpdateReason{
	"""
	You must be the author or have write access to this repository to update this comment.
	"""
	INSUFFICIENT_ACCESS
	"""
	Unable to create comment because issue is locked.
	"""
	LOCKED
	"""
	You must be logged in to update this comment.
	"""
	LOGIN_REQUIRED
	"""
	Repository is under maintenance.
	"""
	MAINTENANCE
	"""
	At least one email address must be verified to update this comment.
	"""
	VERIFIED_EMAIL_REQUIRED
}

"""
Represents a Git commit.
"""
type Commit implements GitObject & Node & Subscribable{
	"""
	An abbreviated version of the Git object ID
	"""
	abbreviatedOid: String!
	"""
	The number of additions in this commit.
	"""
	additions: Int!
	"""
	Authorship details of the commit.
	"""
	author: GitActor
	"""
	Check if the committer and the author match.
	"""
	authoredByCommitter: Boolean!
	"""
	The datetime when this commit was authored.
	"""
	authoredDate: DateTime!
	"""
	Fetches \`;git; blame\` information.
	"""
	blame(
		path: String!
	): Blame!
	"""
	The number of changed files in this commit.
	"""
	changedFiles: Int!
	"""
	Comments made on the commit.
	"""
	comments(
		after: String
		before: String
		first: Int
		last: Int
	): CommitCommentConnection!
	"""
	The HTTP path for this Git object
	"""
	commitResourcePath: URI!
	"""
	The HTTP URL for this Git object
	"""
	commitUrl: URI!
	"""
	The datetime when this commit was committed.
	"""
	committedDate: DateTime!
	"""
	Check if commited via GitHub web UI.
	"""
	committedViaWeb: Boolean!
	"""
	Committership details of the commit.
	"""
	committer: GitActor
	"""
	The number of deletions in this commit.
	"""
	deletions: Int!
	"""
	The linear commit history starting from (and including) this commit, in the same order as \`;git; log\`.
	"""
	history(
		after: String
		author: CommitAuthor
		before: String
		first: Int
		last: Int
		path: String
		since: GitTimestamp
		until: GitTimestamp
	): CommitHistoryConnection!
	id: ID!
	"""
	The Git commit message
	"""
	message: String!
	"""
	The Git commit message body
	"""
	messageBody: String!
	"""
	The commit message body rendered to HTML.
	"""
	messageBodyHTML: HTML!
	"""
	The Git commit message headline
	"""
	messageHeadline: String!
	"""
	The commit message headline rendered to HTML.
	"""
	messageHeadlineHTML: HTML!
	"""
	The Git object ID
	"""
	oid: GitObjectID!
	"""
	The parents of a commit.
	"""
	parents(
		after: String
		before: String
		first: Int
		last: Int
	): CommitConnection!
	"""
	The datetime when this commit was pushed.
	"""
	pushedDate: DateTime
	"""
	The Repository this commit belongs to
	"""
	repository: Repository!
	"""
	The HTTP path for this commit
	"""
	resourcePath: URI!
	"""
	Commit signing information, if present.
	"""
	signature: GitSignature
	"""
	Status information for this commit
	"""
	status: Status
	"""
															Returns a URL to download a tarball archive for a repository.
Note: For private repositories, these links are temporary and expire after five minutes.
	"""
	tarballUrl: URI!
	"""
	Commit's root Tree
	"""
	tree: Tree!
	"""
	The HTTP path for the tree of this commit
	"""
	treeResourcePath: URI!
	"""
	The HTTP URL for the tree of this commit
	"""
	treeUrl: URI!
	"""
	The HTTP URL for this commit
	"""
	url: URI!
	"""
	Check if the viewer is able to change their subscription status for the repository.
	"""
	viewerCanSubscribe: Boolean!
	"""
	Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
	"""
	viewerSubscription: SubscriptionState
	"""
															Returns a URL to download a zipball archive for a repository.
Note: For private repositories, these links are temporary and expire after five minutes.
	"""
	zipballUrl: URI!
}

"""
Represents a Git object.
"""
interface GitObject{
	"""
	An abbreviated version of the Git object ID
	"""
	abbreviatedOid: String!
	"""
	The HTTP path for this Git object
	"""
	commitResourcePath: URI!
	"""
	The HTTP URL for this Git object
	"""
	commitUrl: URI!
	id: ID!
	"""
	The Git object ID
	"""
	oid: GitObjectID!
	"""
	The Repository the Git object belongs to
	"""
	repository: Repository!
}

"""
Represents an actor in a Git commit (ie. an author or committer).
"""
type GitActor{
	"""
	A URL pointing to the author's public avatar.
	"""
	avatarUrl(
		size: Int
	): URI!
	"""
	The timestamp of the Git action (authoring or committing).
	"""
	date: GitTimestamp
	"""
	The email in the Git commit.
	"""
	email: String
	"""
	The name in the Git commit.
	"""
	name: String
	"""
	The GitHub user corresponding to the email field. Null if no such user exists.
	"""
	user: User
}

"""
An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC.
"""
scalar GitTimestamp

"""
Represents a Git blame.
"""
type Blame{
	"""
	The list of ranges from a Git blame.
	"""
	ranges: [BlameRange!]!
}

"""
Represents a range of information from a Git blame.
"""
type BlameRange{
	"""
															Identifies the recency of the change, from 1 (new) to 10 (old). This is
calculated as a 2-quantile and determines the length of distance between the
median age of all the changes in the file and the recency of the current
range's change.
	"""
	age: Int!
	"""
	Identifies the line author
	"""
	commit: Commit!
	"""
	The ending line for the range
	"""
	endingLine: Int!
	"""
	The starting line for the range
	"""
	startingLine: Int!
}

"""
Specifies an author for filtering Git commits.
"""
input CommitAuthor{
	"""
	Email addresses to filter by. Commits authored by any of the specified email addresses will be returned.
	"""
	emails: [String!]
	"""
															ID of a User to filter by. If non-null, only commits authored by this user
will be returned. This field takes precedence over emails.
	"""
	id: ID
}

"""
The connection type for Commit.
"""
type CommitHistoryConnection{
	edges: [CommitEdge]
	"""
	A list of nodes.
	"""
	nodes: [Commit]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type CommitEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Commit
}

"""
The connection type for Commit.
"""
type CommitConnection{
	"""
	A list of edges.
	"""
	edges: [CommitEdge]
	"""
	A list of nodes.
	"""
	nodes: [Commit]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
Information about a signature (GPG or S/MIME) on a Commit or Tag.
"""
interface GitSignature{
	"""
	Email used to sign this object.
	"""
	email: String!
	"""
	True if the signature is valid and verified by GitHub.
	"""
	isValid: Boolean!
	"""
	Payload for GPG signing object. Raw ODB object without the signature header.
	"""
	payload: String!
	"""
	ASCII-armored signature header from object.
	"""
	signature: String!
	"""
	GitHub user corresponding to the email signing this commit.
	"""
	signer: User
	"""
															The state of this signature. \`;VALID\` if signature is valid and verified by
GitHub, otherwise represents reason why signature is considered invalid.
	"""
	state: GitSignatureState!
	"""
	True if the signature was made with GitHub's signing key.
	"""
	wasSignedByGitHub: Boolean!
}

"""
The state of a Git signature.
"""
enum GitSignatureState{
	"""
	The signing certificate or its chain could not be verified
	"""
	BAD_CERT
	"""
	Invalid email used for signing
	"""
	BAD_EMAIL
	"""
	Signing key expired
	"""
	EXPIRED_KEY
	"""
	Internal error - the GPG verification service misbehaved
	"""
	GPGVERIFY_ERROR
	"""
	Internal error - the GPG verification service is unavailable at the moment
	"""
	GPGVERIFY_UNAVAILABLE
	"""
	Invalid signature
	"""
	INVALID
	"""
	Malformed signature
	"""
	MALFORMED_SIG
	"""
	The usage flags for the key that signed this don't allow signing
	"""
	NOT_SIGNING_KEY
	"""
	Email used for signing not known to GitHub
	"""
	NO_USER
	"""
	Valid siganture, though certificate revocation check failed
	"""
	OCSP_ERROR
	"""
	Valid signature, pending certificate revocation checking
	"""
	OCSP_PENDING
	"""
	One or more certificates in chain has been revoked
	"""
	OCSP_REVOKED
	"""
	Key used for signing not known to GitHub
	"""
	UNKNOWN_KEY
	"""
	Unknown signature type
	"""
	UNKNOWN_SIG_TYPE
	"""
	Unsigned
	"""
	UNSIGNED
	"""
	Email used for signing unverified on GitHub
	"""
	UNVERIFIED_EMAIL
	"""
	Valid signature and verified by GitHub
	"""
	VALID
}

"""
Represents a commit status.
"""
type Status implements Node{
	"""
	The commit this status is attached to.
	"""
	commit: Commit
	"""
	Looks up an individual status context by context name.
	"""
	context(
		name: String!
	): StatusContext
	"""
	The individual status contexts for this commit.
	"""
	contexts: [StatusContext!]!
	id: ID!
	"""
	The combined commit status.
	"""
	state: StatusState!
}

"""
Represents an individual commit status context
"""
type StatusContext implements Node{
	"""
	This commit this status context is attached to.
	"""
	commit: Commit
	"""
	The name of this status context.
	"""
	context: String!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The actor who created this status context.
	"""
	creator: Actor
	"""
	The description for this status context.
	"""
	description: String
	id: ID!
	"""
	The state of this status context.
	"""
	state: StatusState!
	"""
	The URL for this status context.
	"""
	targetUrl: URI
}

"""
The possible commit status states.
"""
enum StatusState{
	"""
	Status is errored.
	"""
	ERROR
	"""
	Status is expected.
	"""
	EXPECTED
	"""
	Status is failing.
	"""
	FAILURE
	"""
	Status is pending.
	"""
	PENDING
	"""
	Status is successful.
	"""
	SUCCESS
}

"""
Represents a Git tree.
"""
type Tree implements GitObject & Node{
	"""
	An abbreviated version of the Git object ID
	"""
	abbreviatedOid: String!
	"""
	The HTTP path for this Git object
	"""
	commitResourcePath: URI!
	"""
	The HTTP URL for this Git object
	"""
	commitUrl: URI!
	"""
	A list of tree entries.
	"""
	entries: [TreeEntry!]
	id: ID!
	"""
	The Git object ID
	"""
	oid: GitObjectID!
	"""
	The Repository the Git object belongs to
	"""
	repository: Repository!
}

"""
Represents a Git tree entry.
"""
type TreeEntry{
	"""
	Entry file mode.
	"""
	mode: Int!
	"""
	Entry file name.
	"""
	name: String!
	"""
	Entry file object.
	"""
	object: GitObject
	"""
	Entry file Git object ID.
	"""
	oid: GitObjectID!
	"""
	The Repository the tree entry belongs to
	"""
	repository: Repository!
	"""
	Entry file type.
	"""
	type: String!
}

"""
Represents a Git reference.
"""
type Ref implements Node{
	"""
	A list of pull requests with this ref as the head ref.
	"""
	associatedPullRequests(
		after: String
		baseRefName: String
		before: String
		first: Int
		headRefName: String
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [PullRequestState!]
	): PullRequestConnection!
	id: ID!
	"""
	The ref name.
	"""
	name: String!
	"""
	The ref's prefix, such as \`;refs / heads / \` or \`;refs / tags / \`.
	"""
	prefix: String!
	"""
	The repository the ref belongs to.
	"""
	repository: Repository!
	"""
	The object the ref points to.
	"""
	target: GitObject!
}

"""
Ways in which lists of issues can be ordered upon return.
"""
input IssueOrder{
	"""
	The direction in which to order issues by the specified field.
	"""
	direction: OrderDirection!
	"""
	The field in which to order issues by.
	"""
	field: IssueOrderField!
}

"""
Properties by which issue connections can be ordered.
"""
enum IssueOrderField{
	"""
	Order issues by comment count
	"""
	COMMENTS
	"""
	Order issues by creation time
	"""
	CREATED_AT
	"""
	Order issues by update time
	"""
	UPDATED_AT
}

"""
The possible states of a pull request.
"""
enum PullRequestState{
	"""
	A pull request that has been closed without being merged.
	"""
	CLOSED
	"""
	A pull request that has been closed by being merged.
	"""
	MERGED
	"""
	A pull request that is still open.
	"""
	OPEN
}

"""
The connection type for PullRequest.
"""
type PullRequestConnection{
	"""
	A list of edges.
	"""
	edges: [PullRequestEdge]
	"""
	A list of nodes.
	"""
	nodes: [PullRequest]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type PullRequestEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PullRequest
}

"""
A repository pull request.
"""
type PullRequest implements Assignable & Closable & Comment & Labelable & Lockable & Node & Reactable & RepositoryNode & Subscribable & UniformResourceLocatable & Updatable & UpdatableComment{
	"""
	Reason that the conversation was locked.
	"""
	activeLockReason: LockReason
	"""
	The number of additions in this pull request.
	"""
	additions: Int!
	"""
	A list of Users assigned to this object.
	"""
	assignees(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the subject of the comment.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	Identifies the base Ref associated with the pull request.
	"""
	baseRef: Ref
	"""
	Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted.
	"""
	baseRefName: String!
	"""
	Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted.
	"""
	baseRefOid: GitObjectID!
	"""
	The body as Markdown.
	"""
	body: String!
	"""
	The body rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	The body rendered to text.
	"""
	bodyText: String!
	"""
	The number of changed files in this pull request.
	"""
	changedFiles: Int!
	"""
	\`;true\` if the pull request is closed
	"""
	closed: Boolean!
	"""
	Identifies the date and time when the object was closed.
	"""
	closedAt: DateTime
	"""
	A list of comments associated with the pull request.
	"""
	comments(
		after: String
		before: String
		first: Int
		last: Int
	): IssueCommentConnection!
	"""
	A list of commits present in this pull request's head branch not present in the base branch.
	"""
	commits(
		after: String
		before: String
		first: Int
		last: Int
	): PullRequestCommitConnection!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The number of deletions in this pull request.
	"""
	deletions: Int!
	"""
	The actor who edited this pull request's body.
	"""
	editor: Actor
	"""
	Identifies the head Ref associated with the pull request.
	"""
	headRef: Ref
	"""
	Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted.
	"""
	headRefName: String!
	"""
	Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted.
	"""
	headRefOid: GitObjectID!
	"""
	The repository associated with this pull request's head Ref.
	"""
	headRepository: Repository
	"""
	The owner of the repository associated with this pull request's head Ref.
	"""
	headRepositoryOwner: RepositoryOwner
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	The head and base repositories are different.
	"""
	isCrossRepository: Boolean!
	"""
	A list of labels associated with the object.
	"""
	labels(
		after: String
		before: String
		first: Int
		last: Int
	): LabelConnection
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	\`;true\` if the pull request is locked
	"""
	locked: Boolean!
	"""
	Indicates whether maintainers can modify the pull request.
	"""
	maintainerCanModify: Boolean!
	"""
	The commit that was created when this pull request was merged.
	"""
	mergeCommit: Commit
	"""
	Whether or not the pull request can be merged based on the existence of merge conflicts.
	"""
	mergeable: MergeableState!
	"""
	Whether or not the pull request was merged.
	"""
	merged: Boolean!
	"""
	The date and time that the pull request was merged.
	"""
	mergedAt: DateTime
	"""
	The actor who merged the pull request.
	"""
	mergedBy: Actor
	"""
	Identifies the milestone associated with the pull request.
	"""
	milestone: Milestone
	"""
	Identifies the pull request number.
	"""
	number: Int!
	"""
	A list of Users that are participating in the Pull Request conversation.
	"""
	participants(
		after: String
		before: String
		first: Int
		last: Int
	): UserConnection!
	"""
	The permalink to the pull request.
	"""
	permalink: URI!
	"""
															The commit that GitHub automatically generated to test if this pull request
could be merged. This field will not return a value if the pull request is
merged, or if the test merge commit is still being generated. See the
\`;mergeable\` field for more details on the mergeability of the pull request.
	"""
	potentialMergeCommit: Commit
	"""
	List of project cards associated with this pull request.
	"""
	projectCards(
		after: String
		archivedStates: [ProjectCardArchivedState] = [ARCHIVED,
NOT_ARCHIVED]
		before: String
		first: Int
		last: Int
	): ProjectCardConnection!
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
	A list of reactions grouped by content left on the subject.
	"""
	reactionGroups: [ReactionGroup!]
	"""
	A list of Reactions left on the Issue.
	"""
	reactions(
		after: String
		before: String
		content: ReactionContent
		first: Int
		last: Int
		orderBy: ReactionOrder
	): ReactionConnection!
	"""
	The repository associated with this node.
	"""
	repository: Repository!
	"""
	The HTTP path for this pull request.
	"""
	resourcePath: URI!
	"""
	The HTTP path for reverting this pull request.
	"""
	revertResourcePath: URI!
	"""
	The HTTP URL for reverting this pull request.
	"""
	revertUrl: URI!
	"""
	A list of review requests associated with the pull request.
	"""
	reviewRequests(
		after: String
		before: String
		first: Int
		last: Int
	): ReviewRequestConnection
	"""
	A list of reviews associated with the pull request.
	"""
	reviews(
		after: String
		author: String
		before: String
		first: Int
		last: Int
		states: [PullRequestReviewState!]
	): PullRequestReviewConnection
	"""
	Identifies the state of the pull request.
	"""
	state: PullRequestState!
	"""
	A list of reviewer suggestions based on commit history and past review comments.
	"""
	suggestedReviewers: [SuggestedReviewer!]
	"""
	A list of events, comments, commits, etc. associated with the pull request.
	"""
	timeline(
		after: String
		before: String
		first: Int
		last: Int
		since: DateTime
	): PullRequestTimelineConnection!
	"""
	Identifies the pull request title.
	"""
	title: String!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this pull request.
	"""
	url: URI!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Whether or not the viewer can apply suggestion.
	"""
	viewerCanApplySuggestion: Boolean!
	"""
	Can user react to this subject
	"""
	viewerCanReact: Boolean!
	"""
	Check if the viewer is able to change their subscription status for the repository.
	"""
	viewerCanSubscribe: Boolean!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
	"""
	Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
	"""
	viewerSubscription: SubscriptionState
}

"""
An object that can have labels assigned to it.
"""
interface Labelable{
	"""
	A list of labels associated with the object.
	"""
	labels(
		after: String
		before: String
		first: Int
		last: Int
	): LabelConnection
}

"""
The connection type for Label.
"""
type LabelConnection{
	"""
	A list of edges.
	"""
	edges: [LabelEdge]
	"""
	A list of nodes.
	"""
	nodes: [Label]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type LabelEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Label
}

"""
A label for categorizing Issues or Milestones with a given Repository.
"""
type Label implements Node{
	"""
	Identifies the label color.
	"""
	color: String!
	"""
	Identifies the date and time when the label was created.
	"""
	createdAt: DateTime
	"""
	A brief description of this label.
	"""
	description: String
	id: ID!
	"""
	Indicates whether or not this is a default label.
	"""
	isDefault: Boolean!
	"""
	A list of issues associated with this label.
	"""
	issues(
		after: String
		before: String
		first: Int
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [IssueState!]
	): IssueConnection!
	"""
	Identifies the label name.
	"""
	name: String!
	"""
	A list of pull requests associated with this label.
	"""
	pullRequests(
		after: String
		baseRefName: String
		before: String
		first: Int
		headRefName: String
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [PullRequestState!]
	): PullRequestConnection!
	"""
	The repository associated with this label.
	"""
	repository: Repository!
	"""
	The HTTP path for this label.
	"""
	resourcePath: URI!
	"""
	Identifies the date and time when the label was last updated.
	"""
	updatedAt: DateTime
	"""
	The HTTP URL for this label.
	"""
	url: URI!
}

"""
The possible states of an issue.
"""
enum IssueState{
	"""
	An issue that has been closed
	"""
	CLOSED
	"""
	An issue that is still open
	"""
	OPEN
}

"""
The connection type for Issue.
"""
type IssueConnection{
	"""
	A list of edges.
	"""
	edges: [IssueEdge]
	"""
	A list of nodes.
	"""
	nodes: [Issue]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type IssueEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Issue
}

"""
An object that can be locked.
"""
interface Lockable{
	"""
	Reason that the conversation was locked.
	"""
	activeLockReason: LockReason
	"""
	\`;true\` if the object is locked
	"""
	locked: Boolean!
}

"""
The possible reasons that an issue or pull request was locked.
"""
enum LockReason{
	"""
	The issue or pull request was locked because the conversation was off-topic.
	"""
	OFF_TOPIC
	"""
	The issue or pull request was locked because the conversation was resolved.
	"""
	RESOLVED
	"""
	The issue or pull request was locked because the conversation was spam.
	"""
	SPAM
	"""
	The issue or pull request was locked because the conversation was too heated.
	"""
	TOO_HEATED
}

"""
The connection type for IssueComment.
"""
type IssueCommentConnection{
	"""
	A list of edges.
	"""
	edges: [IssueCommentEdge]
	"""
	A list of nodes.
	"""
	nodes: [IssueComment]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type IssueCommentEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: IssueComment
}

"""
Represents a comment on an Issue.
"""
type IssueComment implements Comment & Deletable & Node & Reactable & RepositoryNode & Updatable & UpdatableComment{
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the subject of the comment.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	The body as Markdown.
	"""
	body: String!
	"""
	The body rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	The body rendered to text.
	"""
	bodyText: String!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The actor who edited the comment.
	"""
	editor: Actor
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	Identifies the issue associated with the comment.
	"""
	issue: Issue!
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
															Returns the pull request associated with the comment, if this comment was made on a
pull request.
	"""
	pullRequest: PullRequest
	"""
	A list of reactions grouped by content left on the subject.
	"""
	reactionGroups: [ReactionGroup!]
	"""
	A list of Reactions left on the Issue.
	"""
	reactions(
		after: String
		before: String
		content: ReactionContent
		first: Int
		last: Int
		orderBy: ReactionOrder
	): ReactionConnection!
	"""
	The repository associated with this node.
	"""
	repository: Repository!
	"""
	The HTTP path for this issue comment
	"""
	resourcePath: URI!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this issue comment
	"""
	url: URI!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Check if the current viewer can delete this object.
	"""
	viewerCanDelete: Boolean!
	"""
	Can user react to this subject
	"""
	viewerCanReact: Boolean!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
}

"""
The connection type for PullRequestCommit.
"""
type PullRequestCommitConnection{
	"""
	A list of edges.
	"""
	edges: [PullRequestCommitEdge]
	"""
	A list of nodes.
	"""
	nodes: [PullRequestCommit]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type PullRequestCommitEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PullRequestCommit
}

"""
Represents a Git commit part of a pull request.
"""
type PullRequestCommit implements Node & UniformResourceLocatable{
	"""
	The Git commit object
	"""
	commit: Commit!
	id: ID!
	"""
	The pull request this commit belongs to
	"""
	pullRequest: PullRequest!
	"""
	The HTTP path for this pull request commit
	"""
	resourcePath: URI!
	"""
	The HTTP URL for this pull request commit
	"""
	url: URI!
}

"""
Whether or not a PullRequest can be merged.
"""
enum MergeableState{
	"""
	The pull request cannot be merged due to merge conflicts.
	"""
	CONFLICTING
	"""
	The pull request can be merged.
	"""
	MERGEABLE
	"""
	The mergeability of the pull request is still being calculated.
	"""
	UNKNOWN
}

"""
Represents a Milestone object on a given repository.
"""
type Milestone implements Closable & Node & UniformResourceLocatable{
	"""
	\`;true\` if the object is closed (definition of closed may depend on type)
	"""
	closed: Boolean!
	"""
	Identifies the date and time when the object was closed.
	"""
	closedAt: DateTime
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the actor who created the milestone.
	"""
	creator: Actor
	"""
	Identifies the description of the milestone.
	"""
	description: String
	"""
	Identifies the due date of the milestone.
	"""
	dueOn: DateTime
	id: ID!
	"""
	A list of issues associated with the milestone.
	"""
	issues(
		after: String
		before: String
		first: Int
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [IssueState!]
	): IssueConnection!
	"""
	Identifies the number of the milestone.
	"""
	number: Int!
	"""
	A list of pull requests associated with the milestone.
	"""
	pullRequests(
		after: String
		baseRefName: String
		before: String
		first: Int
		headRefName: String
		labels: [String!]
		last: Int
		orderBy: IssueOrder
		states: [PullRequestState!]
	): PullRequestConnection!
	"""
	The repository associated with this milestone.
	"""
	repository: Repository!
	"""
	The HTTP path for this milestone
	"""
	resourcePath: URI!
	"""
	Identifies the state of the milestone.
	"""
	state: MilestoneState!
	"""
	Identifies the title of the milestone.
	"""
	title: String!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this milestone
	"""
	url: URI!
}

"""
The possible states of a milestone.
"""
enum MilestoneState{
	"""
	A milestone that has been closed.
	"""
	CLOSED
	"""
	A milestone that is still open.
	"""
	OPEN
}

"""
The connection type for ReviewRequest.
"""
type ReviewRequestConnection{
	"""
	A list of edges.
	"""
	edges: [ReviewRequestEdge]
	"""
	A list of nodes.
	"""
	nodes: [ReviewRequest]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ReviewRequestEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: ReviewRequest
}

"""
A request for a user to review a pull request.
"""
type ReviewRequest implements Node{
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	Identifies the pull request associated with this review request.
	"""
	pullRequest: PullRequest!
	"""
	The reviewer that is requested.
	"""
	requestedReviewer: RequestedReviewer
}

"""
Types that can be requested reviewers.
"""
union RequestedReviewer = Team | User

"""
A team of users in an organization.
"""
type Team implements Node & Subscribable{
	"""
	A list of teams that are ancestors of this team.
	"""
	ancestors(
		after: String
		before: String
		first: Int
		last: Int
	): TeamConnection!
	"""
	A URL pointing to the team's avatar.
	"""
	avatarUrl(
		size: Int = 400
	): URI
	"""
	List of child teams belonging to this team
	"""
	childTeams(
		after: String
		before: String
		first: Int
		immediateOnly: Boolean = true
		last: Int
		orderBy: TeamOrder
		userLogins: [String!]
	): TeamConnection!
	"""
	The slug corresponding to the organization and team.
	"""
	combinedSlug: String!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The description of the team.
	"""
	description: String
	"""
	The HTTP path for editing this team
	"""
	editTeamResourcePath: URI!
	"""
	The HTTP URL for editing this team
	"""
	editTeamUrl: URI!
	id: ID!
	"""
	A list of pending invitations for users to this team
	"""
	invitations(
		after: String
		before: String
		first: Int
		last: Int
	): OrganizationInvitationConnection
	"""
	A list of users who are members of this team.
	"""
	members(
		after: String
		before: String
		first: Int
		last: Int
		membership: TeamMembershipType = ALL
		orderBy: TeamMemberOrder
		query: String
		role: TeamMemberRole
	): TeamMemberConnection!
	"""
	The HTTP path for the team' members
	"""
	membersResourcePath: URI!
	"""
	The HTTP URL for the team' members
	"""
	membersUrl: URI!
	"""
	The name of the team.
	"""
	name: String!
	"""
	The HTTP path creating a new team
	"""
	newTeamResourcePath: URI!
	"""
	The HTTP URL creating a new team
	"""
	newTeamUrl: URI!
	"""
	The organization that owns this team.
	"""
	organization: Organization!
	"""
	The parent team of the team.
	"""
	parentTeam: Team
	"""
	The level of privacy the team has.
	"""
	privacy: TeamPrivacy!
	"""
	A list of repositories this team has access to.
	"""
	repositories(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: TeamRepositoryOrder
		query: String
	): TeamRepositoryConnection!
	"""
	The HTTP path for this team's repositories
	"""
	repositoriesResourcePath: URI!
	"""
	The HTTP URL for this team's repositories
	"""
	repositoriesUrl: URI!
	"""
	The HTTP path for this team
	"""
	resourcePath: URI!
	"""
	The slug corresponding to the team.
	"""
	slug: String!
	"""
	The HTTP path for this team's teams
	"""
	teamsResourcePath: URI!
	"""
	The HTTP URL for this team's teams
	"""
	teamsUrl: URI!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this team
	"""
	url: URI!
	"""
	Team is adminable by the viewer.
	"""
	viewerCanAdminister: Boolean!
	"""
	Check if the viewer is able to change their subscription status for the repository.
	"""
	viewerCanSubscribe: Boolean!
	"""
	Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
	"""
	viewerSubscription: SubscriptionState
}

"""
The connection type for Team.
"""
type TeamConnection{
	"""
	A list of edges.
	"""
	edges: [TeamEdge]
	"""
	A list of nodes.
	"""
	nodes: [Team]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type TeamEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Team
}

"""
Ways in which team connections can be ordered.
"""
input TeamOrder{
	"""
	The direction in which to order nodes.
	"""
	direction: OrderDirection!
	"""
	The field in which to order nodes by.
	"""
	field: TeamOrderField!
}

"""
Properties by which team connections can be ordered.
"""
enum TeamOrderField{
	"""
	Allows ordering a list of teams by name.
	"""
	NAME
}

"""
The connection type for OrganizationInvitation.
"""
type OrganizationInvitationConnection{
	"""
	A list of edges.
	"""
	edges: [OrganizationInvitationEdge]
	"""
	A list of nodes.
	"""
	nodes: [OrganizationInvitation]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type OrganizationInvitationEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: OrganizationInvitation
}

"""
An Invitation for a user to an organization.
"""
type OrganizationInvitation implements Node{
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The email address of the user invited to the organization.
	"""
	email: String
	id: ID!
	"""
	The type of invitation that was sent (e.g. email, user).
	"""
	invitationType: OrganizationInvitationType!
	"""
	The user who was invited to the organization.
	"""
	invitee: User
	"""
	The user who created the invitation.
	"""
	inviter: User!
	"""
	The organization the invite is for
	"""
	organization: Organization!
	"""
	The user's pending role in the organization (e.g. member, owner).
	"""
	role: OrganizationInvitationRole!
}

"""
The possible organization invitation types.
"""
enum OrganizationInvitationType{
	"""
	The invitation was to an email address.
	"""
	EMAIL
	"""
	The invitation was to an existing user.
	"""
	USER
}

"""
The possible organization invitation roles.
"""
enum OrganizationInvitationRole{
	"""
	The user is invited to be an admin of the organization.
	"""
	ADMIN
	"""
	The user is invited to be a billing manager of the organization.
	"""
	BILLING_MANAGER
	"""
	The user is invited to be a direct member of the organization.
	"""
	DIRECT_MEMBER
	"""
	The user's previous role will be reinstated.
	"""
	REINSTATE
}

"""
Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL.
"""
enum TeamMembershipType{
	"""
	Includes immediate and child team members for the team.
	"""
	ALL
	"""
	Includes only child team members for the team.
	"""
	CHILD_TEAM
	"""
	Includes only immediate members of the team.
	"""
	IMMEDIATE
}

"""
Ordering options for team member connections
"""
input TeamMemberOrder{
	"""
	The ordering direction.
	"""
	direction: OrderDirection!
	"""
	The field to order team members by.
	"""
	field: TeamMemberOrderField!
}

"""
Properties by which team member connections can be ordered.
"""
enum TeamMemberOrderField{
	"""
	Order team members by creation time
	"""
	CREATED_AT
	"""
	Order team members by login
	"""
	LOGIN
}

"""
The possible team member roles; either 'maintainer' or 'member'.
"""
enum TeamMemberRole{
	"""
	A team maintainer has permission to add and remove team members.
	"""
	MAINTAINER
	"""
	A team member has no administrative permissions on the team.
	"""
	MEMBER
}

"""
The connection type for User.
"""
type TeamMemberConnection{
	"""
	A list of edges.
	"""
	edges: [TeamMemberEdge]
	"""
	A list of nodes.
	"""
	nodes: [User]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
Represents a user who is a member of a team.
"""
type TeamMemberEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The HTTP path to the organization's member access page.
	"""
	memberAccessResourcePath: URI!
	"""
	The HTTP URL to the organization's member access page.
	"""
	memberAccessUrl: URI!
	node: User!
	"""
	The role the member has on the team.
	"""
	role: TeamMemberRole!
}

"""
The possible team privacy values.
"""
enum TeamPrivacy{
	"""
	A secret team can only be seen by its members.
	"""
	SECRET
	"""
	A visible team can be seen and @mentioned by every member of the organization.
	"""
	VISIBLE
}

"""
Ordering options for team repository connections
"""
input TeamRepositoryOrder{
	"""
	The ordering direction.
	"""
	direction: OrderDirection!
	"""
	The field to order repositories by.
	"""
	field: TeamRepositoryOrderField!
}

"""
Properties by which team repository connections can be ordered.
"""
enum TeamRepositoryOrderField{
	"""
	Order repositories by creation time
	"""
	CREATED_AT
	"""
	Order repositories by name
	"""
	NAME
	"""
	Order repositories by permission
	"""
	PERMISSION
	"""
	Order repositories by push time
	"""
	PUSHED_AT
	"""
	Order repositories by number of stargazers
	"""
	STARGAZERS
	"""
	Order repositories by update time
	"""
	UPDATED_AT
}

"""
The connection type for Repository.
"""
type TeamRepositoryConnection{
	"""
	A list of edges.
	"""
	edges: [TeamRepositoryEdge]
	"""
	A list of nodes.
	"""
	nodes: [Repository]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
Represents a team repository.
"""
type TeamRepositoryEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	node: Repository!
	"""
	The permission level the team has on the repository
	"""
	permission: RepositoryPermission!
}

"""
The possible states of a pull request review.
"""
enum PullRequestReviewState{
	"""
	A review allowing the pull request to merge.
	"""
	APPROVED
	"""
	A review blocking the pull request from merging.
	"""
	CHANGES_REQUESTED
	"""
	An informational review.
	"""
	COMMENTED
	"""
	A review that has been dismissed.
	"""
	DISMISSED
	"""
	A review that has not yet been submitted.
	"""
	PENDING
}

"""
The connection type for PullRequestReview.
"""
type PullRequestReviewConnection{
	"""
	A list of edges.
	"""
	edges: [PullRequestReviewEdge]
	"""
	A list of nodes.
	"""
	nodes: [PullRequestReview]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type PullRequestReviewEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PullRequestReview
}

"""
A review object for a given pull request.
"""
type PullRequestReview implements Comment & Deletable & Node & RepositoryNode & Updatable & UpdatableComment{
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the subject of the comment.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	Identifies the pull request review body.
	"""
	body: String!
	"""
	The body of this review rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	The body of this review rendered as plain text.
	"""
	bodyText: String!
	"""
	A list of review comments for the current pull request review.
	"""
	comments(
		after: String
		before: String
		first: Int
		last: Int
	): PullRequestReviewCommentConnection!
	"""
	Identifies the commit associated with this pull request review.
	"""
	commit: Commit
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The actor who edited the comment.
	"""
	editor: Actor
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
	Identifies the pull request associated with this pull request review.
	"""
	pullRequest: PullRequest!
	"""
	The repository associated with this node.
	"""
	repository: Repository!
	"""
	The HTTP path permalink for this PullRequestReview.
	"""
	resourcePath: URI!
	"""
	Identifies the current state of the pull request review.
	"""
	state: PullRequestReviewState!
	"""
	Identifies when the Pull Request Review was submitted
	"""
	submittedAt: DateTime
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL permalink for this PullRequestReview.
	"""
	url: URI!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Check if the current viewer can delete this object.
	"""
	viewerCanDelete: Boolean!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
}

"""
The connection type for PullRequestReviewComment.
"""
type PullRequestReviewCommentConnection{
	"""
	A list of edges.
	"""
	edges: [PullRequestReviewCommentEdge]
	"""
	A list of nodes.
	"""
	nodes: [PullRequestReviewComment]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type PullRequestReviewCommentEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PullRequestReviewComment
}

"""
A review comment associated with a given repository pull request.
"""
type PullRequestReviewComment implements Comment & Deletable & Node & Reactable & RepositoryNode & Updatable & UpdatableComment{
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the subject of the comment.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	The comment body of this review comment.
	"""
	body: String!
	"""
	The comment body of this review comment rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	The comment body of this review comment rendered as plain text.
	"""
	bodyText: String!
	"""
	Identifies the commit associated with the comment.
	"""
	commit: Commit!
	"""
	Identifies when the comment was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The diff hunk to which the comment applies.
	"""
	diffHunk: String!
	"""
	Identifies when the comment was created in a draft state.
	"""
	draftedAt: DateTime!
	"""
	The actor who edited the comment.
	"""
	editor: Actor
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	Identifies the original commit associated with the comment.
	"""
	originalCommit: Commit
	"""
	The original line index in the diff to which the comment applies.
	"""
	originalPosition: Int!
	"""
	The path to which the comment applies.
	"""
	path: String!
	"""
	The line index in the diff to which the comment applies.
	"""
	position: Int
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
	The pull request associated with this review comment.
	"""
	pullRequest: PullRequest!
	"""
	The pull request review associated with this review comment.
	"""
	pullRequestReview: PullRequestReview
	"""
	A list of reactions grouped by content left on the subject.
	"""
	reactionGroups: [ReactionGroup!]
	"""
	A list of Reactions left on the Issue.
	"""
	reactions(
		after: String
		before: String
		content: ReactionContent
		first: Int
		last: Int
		orderBy: ReactionOrder
	): ReactionConnection!
	"""
	The comment this is a reply to.
	"""
	replyTo: PullRequestReviewComment
	"""
	The repository associated with this node.
	"""
	repository: Repository!
	"""
	The HTTP path permalink for this review comment.
	"""
	resourcePath: URI!
	"""
	Identifies when the comment was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL permalink for this review comment.
	"""
	url: URI!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Check if the current viewer can delete this object.
	"""
	viewerCanDelete: Boolean!
	"""
	Can user react to this subject
	"""
	viewerCanReact: Boolean!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
}

"""
A suggestion to review a pull request based on a user's commit history and review comments.
"""
type SuggestedReviewer{
	"""
	Is this suggestion based on past commits?
	"""
	isAuthor: Boolean!
	"""
	Is this suggestion based on past review comments?
	"""
	isCommenter: Boolean!
	"""
	Identifies the user suggested to review the pull request.
	"""
	reviewer: User!
}

"""
The connection type for PullRequestTimelineItem.
"""
type PullRequestTimelineConnection{
	"""
	A list of edges.
	"""
	edges: [PullRequestTimelineItemEdge]
	"""
	A list of nodes.
	"""
	nodes: [PullRequestTimelineItem]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type PullRequestTimelineItemEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PullRequestTimelineItem
}

"""
An item in an pull request timeline
"""
union PullRequestTimelineItem = AssignedEvent | BaseRefForcePushedEvent | ClosedEvent | Commit | CommitCommentThread | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MergedEvent | MilestonedEvent | PullRequestReview | PullRequestReviewComment | PullRequestReviewThread | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent

"""
Represents an 'assigned' event on any assignable object.
"""
type AssignedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the assignable associated with the event.
	"""
	assignable: Assignable!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Identifies the user who was assigned.
	"""
	user: User
}

"""
Represents a 'base_ref_force_pushed' event on a given pull request.
"""
type BaseRefForcePushedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the after commit SHA for the 'base_ref_force_pushed' event.
	"""
	afterCommit: Commit
	"""
	Identifies the before commit SHA for the 'base_ref_force_pushed' event.
	"""
	beforeCommit: Commit
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
	"""
	Identifies the fully qualified ref name for the 'base_ref_force_pushed' event.
	"""
	ref: Ref
}

"""
Represents a 'closed' event on any \`;Closable\`.
"""
type ClosedEvent implements Node & UniformResourceLocatable{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Object that was closed.
	"""
	closable: Closable!
	"""
	Object which triggered the creation of this event.
	"""
	closer: Closer
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	The HTTP path for this closed event.
	"""
	resourcePath: URI!
	"""
	The HTTP URL for this closed event.
	"""
	url: URI!
}

"""
The object which triggered a \`;ClosedEvent\`.
"""
union Closer = Commit | PullRequest

"""
A thread of comments on a commit.
"""
type CommitCommentThread implements Node & RepositoryNode{
	"""
	The comments that exist in this thread.
	"""
	comments(
		after: String
		before: String
		first: Int
		last: Int
	): CommitCommentConnection!
	"""
	The commit the comments were made on.
	"""
	commit: Commit!
	id: ID!
	"""
	The file the comments were made on.
	"""
	path: String
	"""
	The position in the diff for the commit that the comment was made on.
	"""
	position: Int
	"""
	The repository associated with this node.
	"""
	repository: Repository!
}

"""
Represents a mention made by one issue or pull request to another.
"""
type CrossReferencedEvent implements Node & UniformResourceLocatable{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Reference originated in a different repository.
	"""
	isCrossRepository: Boolean!
	"""
	Identifies when the reference was made.
	"""
	referencedAt: DateTime!
	"""
	The HTTP path for this pull request.
	"""
	resourcePath: URI!
	"""
	Issue or pull request that made the reference.
	"""
	source: ReferencedSubject!
	"""
	Issue or pull request to which the reference was made.
	"""
	target: ReferencedSubject!
	"""
	The HTTP URL for this pull request.
	"""
	url: URI!
	"""
	Checks if the target will be closed when the source is merged.
	"""
	willCloseTarget: Boolean!
}

"""
Any referencable object
"""
union ReferencedSubject = Issue | PullRequest

"""
Represents a 'demilestoned' event on a given issue or pull request.
"""
type DemilestonedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Identifies the milestone title associated with the 'demilestoned' event.
	"""
	milestoneTitle: String!
	"""
	Object referenced by event.
	"""
	subject: MilestoneItem!
}

"""
Types that can be inside a Milestone.
"""
union MilestoneItem = Issue | PullRequest

"""
Represents a 'deployed' event on a given pull request.
"""
type DeployedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The deployment associated with the 'deployed' event.
	"""
	deployment: Deployment!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
	"""
	The ref associated with the 'deployed' event.
	"""
	ref: Ref
}

"""
Represents triggered deployment instance.
"""
type Deployment implements Node{
	"""
	Identifies the commit sha of the deployment.
	"""
	commit: Commit
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the actor who triggered the deployment.
	"""
	creator: Actor
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The deployment description.
	"""
	description: String
	"""
	The environment to which this deployment was made.
	"""
	environment: String
	id: ID!
	"""
	The latest status of this deployment.
	"""
	latestStatus: DeploymentStatus
	"""
	Extra information that a deployment system might need.
	"""
	payload: String
	"""
	Identifies the Ref of the deployment, if the deployment was created by ref.
	"""
	ref: Ref
	"""
	Identifies the repository associated with the deployment.
	"""
	repository: Repository!
	"""
	The current state of the deployment.
	"""
	state: DeploymentState
	"""
	A list of statuses associated with the deployment.
	"""
	statuses(
		after: String
		before: String
		first: Int
		last: Int
	): DeploymentStatusConnection
	"""
	The deployment task.
	"""
	task: String
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
}

"""
Describes the status of a given deployment attempt.
"""
type DeploymentStatus implements Node{
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the actor who triggered the deployment.
	"""
	creator: Actor
	"""
	Identifies the deployment associated with status.
	"""
	deployment: Deployment!
	"""
	Identifies the description of the deployment.
	"""
	description: String
	"""
	Identifies the environment URL of the deployment.
	"""
	environmentUrl: URI
	id: ID!
	"""
	Identifies the log URL of the deployment.
	"""
	logUrl: URI
	"""
	Identifies the current state of the deployment.
	"""
	state: DeploymentStatusState!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
}

"""
The possible states for a deployment status.
"""
enum DeploymentStatusState{
	"""
	The deployment experienced an error.
	"""
	ERROR
	"""
	The deployment has failed.
	"""
	FAILURE
	"""
	The deployment is inactive.
	"""
	INACTIVE
	"""
	The deployment is pending.
	"""
	PENDING
	"""
	The deployment was successful.
	"""
	SUCCESS
}

"""
The possible states in which a deployment can be.
"""
enum DeploymentState{
	"""
	The pending deployment was not updated after 30 minutes.
	"""
	ABANDONED
	"""
	The deployment is currently active.
	"""
	ACTIVE
	"""
	An inactive transient deployment.
	"""
	DESTROYED
	"""
	The deployment experienced an error.
	"""
	ERROR
	"""
	The deployment has failed.
	"""
	FAILURE
	"""
	The deployment is inactive.
	"""
	INACTIVE
	"""
	The deployment is pending.
	"""
	PENDING
}

"""
The connection type for DeploymentStatus.
"""
type DeploymentStatusConnection{
	"""
	A list of edges.
	"""
	edges: [DeploymentStatusEdge]
	"""
	A list of nodes.
	"""
	nodes: [DeploymentStatus]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type DeploymentStatusEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: DeploymentStatus
}

"""
Represents a 'deployment_environment_changed' event on a given pull request.
"""
type DeploymentEnvironmentChangedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The deployment status that updated the deployment environment.
	"""
	deploymentStatus: DeploymentStatus!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
}

"""
Represents a 'head_ref_deleted' event on a given pull request.
"""
type HeadRefDeletedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the Ref associated with the \`;head_ref_deleted\` event.
	"""
	headRef: Ref
	"""
	Identifies the name of the Ref associated with the \`;head_ref_deleted\` event.
	"""
	headRefName: String!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
}

"""
Represents a 'head_ref_force_pushed' event on a given pull request.
"""
type HeadRefForcePushedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the after commit SHA for the 'head_ref_force_pushed' event.
	"""
	afterCommit: Commit
	"""
	Identifies the before commit SHA for the 'head_ref_force_pushed' event.
	"""
	beforeCommit: Commit
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
	"""
	Identifies the fully qualified ref name for the 'head_ref_force_pushed' event.
	"""
	ref: Ref
}

"""
Represents a 'head_ref_restored' event on a given pull request.
"""
type HeadRefRestoredEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
}

"""
Represents a 'labeled' event on a given issue or pull request.
"""
type LabeledEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Identifies the label associated with the 'labeled' event.
	"""
	label: Label!
	"""
	Identifies the \`;Labelable\` associated with the event.
	"""
	labelable: Labelable!
}

"""
Represents a 'locked' event on a given issue or pull request.
"""
type LockedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Reason that the conversation was locked (optional).
	"""
	lockReason: LockReason
	"""
	Object that was locked.
	"""
	lockable: Lockable!
}

"""
Represents a 'merged' event on a given pull request.
"""
type MergedEvent implements Node & UniformResourceLocatable{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the commit associated with the \`;merge\` event.
	"""
	commit: Commit
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Identifies the Ref associated with the \`;merge\` event.
	"""
	mergeRef: Ref
	"""
	Identifies the name of the Ref associated with the \`;merge\` event.
	"""
	mergeRefName: String!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
	"""
	The HTTP path for this merged event.
	"""
	resourcePath: URI!
	"""
	The HTTP URL for this merged event.
	"""
	url: URI!
}

"""
Represents a 'milestoned' event on a given issue or pull request.
"""
type MilestonedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Identifies the milestone title associated with the 'milestoned' event.
	"""
	milestoneTitle: String!
	"""
	Object referenced by event.
	"""
	subject: MilestoneItem!
}

"""
A threaded list of comments for a given pull request.
"""
type PullRequestReviewThread implements Node{
	"""
	A list of pull request comments associated with the thread.
	"""
	comments(
		after: String
		before: String
		first: Int
		last: Int
	): PullRequestReviewCommentConnection!
	id: ID!
	"""
	Identifies the pull request associated with this thread.
	"""
	pullRequest: PullRequest!
	"""
	Identifies the repository associated with this thread.
	"""
	repository: Repository!
}

"""
Represents a 'referenced' event on a given \`;ReferencedSubject\`.
"""
type ReferencedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the commit associated with the 'referenced' event.
	"""
	commit: Commit
	"""
	Identifies the repository associated with the 'referenced' event.
	"""
	commitRepository: Repository!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Reference originated in a different repository.
	"""
	isCrossRepository: Boolean!
	"""
	Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference.
	"""
	isDirectReference: Boolean!
	"""
	Object referenced by event.
	"""
	subject: ReferencedSubject!
}

"""
Represents a 'renamed' event on a given issue or pull request
"""
type RenamedTitleEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the current title of the issue or pull request.
	"""
	currentTitle: String!
	id: ID!
	"""
	Identifies the previous title of the issue or pull request.
	"""
	previousTitle: String!
	"""
	Subject that was renamed.
	"""
	subject: RenamedTitleSubject!
}

"""
An object which has a renamable title
"""
union RenamedTitleSubject = Issue | PullRequest

"""
Represents a 'reopened' event on any \`;Closable\`.
"""
type ReopenedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Object that was reopened.
	"""
	closable: Closable!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
}

"""
Represents a 'review_dismissed' event on a given issue or pull request.
"""
type ReviewDismissedEvent implements Node & UniformResourceLocatable{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	Identifies the message associated with the 'review_dismissed' event.
	"""
	message: String!
	"""
	The message associated with the event, rendered to HTML.
	"""
	messageHtml: HTML!
	"""
	Identifies the previous state of the review with the 'review_dismissed' event.
	"""
	previousReviewState: PullRequestReviewState!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
	"""
	Identifies the commit which caused the review to become stale.
	"""
	pullRequestCommit: PullRequestCommit
	"""
	The HTTP path for this review dismissed event.
	"""
	resourcePath: URI!
	"""
	Identifies the review associated with the 'review_dismissed' event.
	"""
	review: PullRequestReview
	"""
	The HTTP URL for this review dismissed event.
	"""
	url: URI!
}

"""
Represents an 'review_request_removed' event on a given pull request.
"""
type ReviewRequestRemovedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
	"""
	Identifies the reviewer whose review request was removed.
	"""
	requestedReviewer: RequestedReviewer
}

"""
Represents an 'review_requested' event on a given pull request.
"""
type ReviewRequestedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	PullRequest referenced by event.
	"""
	pullRequest: PullRequest!
	"""
	Identifies the reviewer whose review was requested.
	"""
	requestedReviewer: RequestedReviewer
}

"""
Represents a 'subscribed' event on a given \`;Subscribable\`.
"""
type SubscribedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Object referenced by event.
	"""
	subscribable: Subscribable!
}

"""
Represents an 'unassigned' event on any assignable object.
"""
type UnassignedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the assignable associated with the event.
	"""
	assignable: Assignable!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Identifies the subject (user) who was unassigned.
	"""
	user: User
}

"""
Represents an 'unlabeled' event on a given issue or pull request.
"""
type UnlabeledEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Identifies the label associated with the 'unlabeled' event.
	"""
	label: Label!
	"""
	Identifies the \`;Labelable\` associated with the event.
	"""
	labelable: Labelable!
}

"""
Represents an 'unlocked' event on a given issue or pull request.
"""
type UnlockedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Object that was unlocked.
	"""
	lockable: Lockable!
}

"""
Represents an 'unsubscribed' event on a given \`;Subscribable\`.
"""
type UnsubscribedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	Object referenced by event.
	"""
	subscribable: Subscribable!
}

"""
The connection type for DeployKey.
"""
type DeployKeyConnection{
	"""
	A list of edges.
	"""
	edges: [DeployKeyEdge]
	"""
	A list of nodes.
	"""
	nodes: [DeployKey]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type DeployKeyEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: DeployKey
}

"""
A repository deploy key.
"""
type DeployKey implements Node{
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	id: ID!
	"""
	The deploy key.
	"""
	key: String!
	"""
	Whether or not the deploy key is read only.
	"""
	readOnly: Boolean!
	"""
	The deploy key title.
	"""
	title: String!
	"""
	Whether or not the deploy key has been verified.
	"""
	verified: Boolean!
}

"""
The connection type for Deployment.
"""
type DeploymentConnection{
	"""
	A list of edges.
	"""
	edges: [DeploymentEdge]
	"""
	A list of nodes.
	"""
	nodes: [Deployment]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type DeploymentEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Deployment
}

"""
Used for return value of Repository.issueOrPullRequest.
"""
union IssueOrPullRequest = Issue | PullRequest

"""
Ordering options for language connections.
"""
input LanguageOrder{
	"""
	The ordering direction.
	"""
	direction: OrderDirection!
	"""
	The field to order languages by.
	"""
	field: LanguageOrderField!
}

"""
Properties by which language connections can be ordered.
"""
enum LanguageOrderField{
	"""
	Order languages by the size of all files containing the language
	"""
	SIZE
}

"""
A list of languages associated with the parent.
"""
type LanguageConnection{
	"""
	A list of edges.
	"""
	edges: [LanguageEdge]
	"""
	A list of nodes.
	"""
	nodes: [Language]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
	"""
	The total size in bytes of files written in that language.
	"""
	totalSize: Int!
}

"""
Represents the language of a repository.
"""
type LanguageEdge{
	cursor: String!
	node: Language!
	"""
	The number of bytes of code written in the language.
	"""
	size: Int!
}

"""
Represents a given language found in repositories.
"""
type Language implements Node{
	"""
	The color defined for the current language.
	"""
	color: String
	id: ID!
	"""
	The name of the current language.
	"""
	name: String!
}

"""
Ordering options for milestone connections.
"""
input MilestoneOrder{
	"""
	The ordering direction.
	"""
	direction: OrderDirection!
	"""
	The field to order milestones by.
	"""
	field: MilestoneOrderField!
}

"""
Properties by which milestone connections can be ordered.
"""
enum MilestoneOrderField{
	"""
	Order milestones by when they were created.
	"""
	CREATED_AT
	"""
	Order milestones by when they are due.
	"""
	DUE_DATE
	"""
	Order milestones by their number.
	"""
	NUMBER
	"""
	Order milestones by when they were last updated.
	"""
	UPDATED_AT
}

"""
The connection type for Milestone.
"""
type MilestoneConnection{
	"""
	A list of edges.
	"""
	edges: [MilestoneEdge]
	"""
	A list of nodes.
	"""
	nodes: [Milestone]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type MilestoneEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Milestone
}

"""
Ways in which lists of projects can be ordered upon return.
"""
input ProjectOrder{
	"""
	The direction in which to order projects by the specified field.
	"""
	direction: OrderDirection!
	"""
	The field in which to order projects by.
	"""
	field: ProjectOrderField!
}

"""
Properties by which project connections can be ordered.
"""
enum ProjectOrderField{
	"""
	Order projects by creation time
	"""
	CREATED_AT
	"""
	Order projects by name
	"""
	NAME
	"""
	Order projects by update time
	"""
	UPDATED_AT
}

"""
State of the project; either 'open' or 'closed'
"""
enum ProjectState{
	"""
	The project is closed.
	"""
	CLOSED
	"""
	The project is open.
	"""
	OPEN
}

"""
A list of projects associated with the owner.
"""
type ProjectConnection{
	"""
	A list of edges.
	"""
	edges: [ProjectEdge]
	"""
	A list of nodes.
	"""
	nodes: [Project]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ProjectEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Project
}

"""
The connection type for ProtectedBranch.
"""
type ProtectedBranchConnection{
	"""
	A list of edges.
	"""
	edges: [ProtectedBranchEdge]
	"""
	A list of nodes.
	"""
	nodes: [ProtectedBranch]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ProtectedBranchEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: ProtectedBranch
}

"""
A repository protected branch.
"""
type ProtectedBranch implements Node{
	"""
	The actor who created this protected branch.
	"""
	creator: Actor
	"""
	Will new commits pushed to this branch dismiss pull request review approvals.
	"""
	hasDismissableStaleReviews: Boolean!
	"""
	Are reviews required to update this branch.
	"""
	hasRequiredReviews: Boolean!
	"""
	Are status checks required to update this branch.
	"""
	hasRequiredStatusChecks: Boolean!
	"""
	Is pushing to this branch restricted.
	"""
	hasRestrictedPushes: Boolean!
	"""
	Is dismissal of pull request reviews restricted.
	"""
	hasRestrictedReviewDismissals: Boolean!
	"""
	Are branches required to be up to date before merging.
	"""
	hasStrictRequiredStatusChecks: Boolean!
	id: ID!
	"""
	Can admins overwrite branch protection.
	"""
	isAdminEnforced: Boolean!
	"""
	The name of the protected branch rule.
	"""
	name: String!
	"""
	A list push allowances for this protected branch.
	"""
	pushAllowances(
		after: String
		before: String
		first: Int
		last: Int
	): PushAllowanceConnection!
	"""
	The repository associated with this protected branch.
	"""
	repository: Repository!
	"""
	List of required status check contexts that must pass for commits to be accepted to this branch.
	"""
	requiredStatusCheckContexts: [String]
	"""
	A list review dismissal allowances for this protected branch.
	"""
	reviewDismissalAllowances(
		after: String
		before: String
		first: Int
		last: Int
	): ReviewDismissalAllowanceConnection!
}

"""
The connection type for PushAllowance.
"""
type PushAllowanceConnection{
	"""
	A list of edges.
	"""
	edges: [PushAllowanceEdge]
	"""
	A list of nodes.
	"""
	nodes: [PushAllowance]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type PushAllowanceEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PushAllowance
}

"""
A team or user who has the ability to push to a protected branch.
"""
type PushAllowance implements Node{
	"""
	The actor that can push.
	"""
	actor: PushAllowanceActor
	id: ID!
	"""
	Identifies the protected branch associated with the allowed user or team.
	"""
	protectedBranch: ProtectedBranch!
}

"""
Types that can be an actor.
"""
union PushAllowanceActor = Team | User

"""
The connection type for ReviewDismissalAllowance.
"""
type ReviewDismissalAllowanceConnection{
	"""
	A list of edges.
	"""
	edges: [ReviewDismissalAllowanceEdge]
	"""
	A list of nodes.
	"""
	nodes: [ReviewDismissalAllowance]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ReviewDismissalAllowanceEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: ReviewDismissalAllowance
}

"""
A team or user who has the ability to dismiss a review on a protected branch.
"""
type ReviewDismissalAllowance implements Node{
	"""
	The actor that can dismiss.
	"""
	actor: ReviewDismissalAllowanceActor
	id: ID!
	"""
	Identifies the protected branch associated with the allowed user or team.
	"""
	protectedBranch: ProtectedBranch!
}

"""
Types that can be an actor.
"""
union ReviewDismissalAllowanceActor = Team | User

"""
Ways in which lists of git refs can be ordered upon return.
"""
input RefOrder{
	"""
	The direction in which to order refs by the specified field.
	"""
	direction: OrderDirection!
	"""
	The field in which to order refs by.
	"""
	field: RefOrderField!
}

"""
Properties by which ref connections can be ordered.
"""
enum RefOrderField{
	"""
	Order refs by their alphanumeric name
	"""
	ALPHABETICAL
	"""
	Order refs by underlying commit date if the ref prefix is refs/tags/
	"""
	TAG_COMMIT_DATE
}

"""
The connection type for Ref.
"""
type RefConnection{
	"""
	A list of edges.
	"""
	edges: [RefEdge]
	"""
	A list of nodes.
	"""
	nodes: [Ref]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type RefEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Ref
}

"""
A release contains the content for a release.
"""
type Release implements Node & UniformResourceLocatable{
	"""
	The author of the release
	"""
	author: User
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the description of the release.
	"""
	description: String
	id: ID!
	"""
	Whether or not the release is a draft
	"""
	isDraft: Boolean!
	"""
	Whether or not the release is a prerelease
	"""
	isPrerelease: Boolean!
	"""
	Identifies the title of the release.
	"""
	name: String
	"""
	Identifies the date and time when the release was created.
	"""
	publishedAt: DateTime
	"""
	List of releases assets which are dependent on this release.
	"""
	releaseAssets(
		after: String
		before: String
		first: Int
		last: Int
		name: String
	): ReleaseAssetConnection!
	"""
	The HTTP path for this issue
	"""
	resourcePath: URI!
	"""
	The Git tag the release points to
	"""
	tag: Ref
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this issue
	"""
	url: URI!
}

"""
The connection type for ReleaseAsset.
"""
type ReleaseAssetConnection{
	"""
	A list of edges.
	"""
	edges: [ReleaseAssetEdge]
	"""
	A list of nodes.
	"""
	nodes: [ReleaseAsset]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ReleaseAssetEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: ReleaseAsset
}

"""
A release asset contains the content for a release asset.
"""
type ReleaseAsset implements Node{
	"""
	The asset's content-type
	"""
	contentType: String!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The number of times this asset was downloaded
	"""
	downloadCount: Int!
	"""
	Identifies the URL where you can download the release asset via the browser.
	"""
	downloadUrl: URI!
	id: ID!
	"""
	Identifies the title of the release asset.
	"""
	name: String!
	"""
	Release that the asset is associated with
	"""
	release: Release
	"""
	The size (in bytes) of the asset
	"""
	size: Int!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The user that performed the upload
	"""
	uploadedBy: User!
	"""
	Identifies the URL of the release asset.
	"""
	url: URI!
}

"""
Ways in which lists of releases can be ordered upon return.
"""
input ReleaseOrder{
	"""
	The direction in which to order releases by the specified field.
	"""
	direction: OrderDirection!
	"""
	The field in which to order releases by.
	"""
	field: ReleaseOrderField!
}

"""
Properties by which release connections can be ordered.
"""
enum ReleaseOrderField{
	"""
	Order releases by creation time
	"""
	CREATED_AT
	"""
	Order releases alphabetically by name
	"""
	NAME
}

"""
The connection type for Release.
"""
type ReleaseConnection{
	"""
	A list of edges.
	"""
	edges: [ReleaseEdge]
	"""
	A list of nodes.
	"""
	nodes: [Release]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ReleaseEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Release
}

"""
The connection type for RepositoryTopic.
"""
type RepositoryTopicConnection{
	"""
	A list of edges.
	"""
	edges: [RepositoryTopicEdge]
	"""
	A list of nodes.
	"""
	nodes: [RepositoryTopic]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type RepositoryTopicEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: RepositoryTopic
}

"""
A repository-topic connects a repository to a topic.
"""
type RepositoryTopic implements Node & UniformResourceLocatable{
	id: ID!
	"""
	The HTTP path for this repository-topic.
	"""
	resourcePath: URI!
	"""
	The topic.
	"""
	topic: Topic!
	"""
	The HTTP URL for this repository-topic.
	"""
	url: URI!
}

"""
A topic aggregates entities that are related to a subject.
"""
type Topic implements Node{
	id: ID!
	"""
	The topic's name.
	"""
	name: String!
	"""
															A list of related topics, including aliases of this topic, sorted with the most relevant
first.
	"""
	relatedTopics: [Topic!]!
}

"""
Git SSH string
"""
scalar GitSSHRemote

"""
The connection type for User.
"""
type FollowerConnection{
	"""
	A list of edges.
	"""
	edges: [UserEdge]
	"""
	A list of nodes.
	"""
	nodes: [User]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
The connection type for User.
"""
type FollowingConnection{
	"""
	A list of edges.
	"""
	edges: [UserEdge]
	"""
	A list of nodes.
	"""
	nodes: [User]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
A Gist.
"""
type Gist implements Node & Starrable{
	"""
	A list of comments associated with the gist
	"""
	comments(
		after: String
		before: String
		first: Int
		last: Int
	): GistCommentConnection!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	The gist description.
	"""
	description: String
	id: ID!
	"""
	Whether the gist is public or not.
	"""
	isPublic: Boolean!
	"""
	The gist name.
	"""
	name: String!
	"""
	The gist owner.
	"""
	owner: RepositoryOwner
	"""
	Identifies when the gist was last pushed to.
	"""
	pushedAt: DateTime
	"""
	A list of users who have starred this starrable.
	"""
	stargazers(
		after: String
		before: String
		first: Int
		last: Int
		orderBy: StarOrder
	): StargazerConnection!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	Returns a boolean indicating whether the viewing user has starred this starrable.
	"""
	viewerHasStarred: Boolean!
}

"""
The connection type for GistComment.
"""
type GistCommentConnection{
	"""
	A list of edges.
	"""
	edges: [GistCommentEdge]
	"""
	A list of nodes.
	"""
	nodes: [GistComment]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type GistCommentEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: GistComment
}

"""
Represents a comment on an Gist.
"""
type GistComment implements Comment & Deletable & Node & Updatable & UpdatableComment{
	"""
	The actor who authored the comment.
	"""
	author: Actor
	"""
	Author's association with the gist.
	"""
	authorAssociation: CommentAuthorAssociation!
	"""
	Identifies the comment body.
	"""
	body: String!
	"""
	The comment body rendered to HTML.
	"""
	bodyHTML: HTML!
	"""
	The body rendered to text.
	"""
	bodyText: String!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Check if this comment was created via an email reply.
	"""
	createdViaEmail: Boolean!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	"""
	The actor who edited the comment.
	"""
	editor: Actor
	"""
	The associated gist.
	"""
	gist: Gist!
	id: ID!
	"""
	Check if this comment was edited and includes an edit with the creation data
	"""
	includesCreatedEdit: Boolean!
	"""
	The moment the editor made the last edit
	"""
	lastEditedAt: DateTime
	"""
	Identifies when the comment was published at.
	"""
	publishedAt: DateTime
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	A list of edits to this content.
	"""
	userContentEdits(
		after: String
		before: String
		first: Int
		last: Int
	): UserContentEditConnection
	"""
	Check if the current viewer can delete this object.
	"""
	viewerCanDelete: Boolean!
	"""
	Check if the current viewer can update this object.
	"""
	viewerCanUpdate: Boolean!
	"""
	Reasons why the current viewer can not update this comment.
	"""
	viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!
	"""
	Did the viewer author this comment.
	"""
	viewerDidAuthor: Boolean!
}

"""
Ordering options for gist connections
"""
input GistOrder{
	"""
	The ordering direction.
	"""
	direction: OrderDirection!
	"""
	The field to order repositories by.
	"""
	field: GistOrderField!
}

"""
Properties by which gist connections can be ordered.
"""
enum GistOrderField{
	"""
	Order gists by creation time
	"""
	CREATED_AT
	"""
	Order gists by push time
	"""
	PUSHED_AT
	"""
	Order gists by update time
	"""
	UPDATED_AT
}

"""
The privacy of a Gist
"""
enum GistPrivacy{
	"""
	Gists that are public and secret
	"""
	ALL
	"""
	Public
	"""
	PUBLIC
	"""
	Secret
	"""
	SECRET
}

"""
The connection type for Gist.
"""
type GistConnection{
	"""
	A list of edges.
	"""
	edges: [GistEdge]
	"""
	A list of nodes.
	"""
	nodes: [Gist]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type GistEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Gist
}

"""
The connection type for Organization.
"""
type OrganizationConnection{
	"""
	A list of edges.
	"""
	edges: [OrganizationEdge]
	"""
	A list of nodes.
	"""
	nodes: [Organization]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type OrganizationEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Organization
}

"""
The connection type for PublicKey.
"""
type PublicKeyConnection{
	"""
	A list of edges.
	"""
	edges: [PublicKeyEdge]
	"""
	A list of nodes.
	"""
	nodes: [PublicKey]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type PublicKeyEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PublicKey
}

"""
A user's public key.
"""
type PublicKey implements Node{
	id: ID!
	"""
	The public key string
	"""
	key: String!
}

"""
The reason a repository is listed as 'contributed'.
"""
enum RepositoryContributionType{
	"""
	Created a commit
	"""
	COMMIT
	"""
	Created an issue
	"""
	ISSUE
	"""
	Created a pull request
	"""
	PULL_REQUEST
	"""
	Reviewed a pull request
	"""
	PULL_REQUEST_REVIEW
	"""
	Created the repository
	"""
	REPOSITORY
}

"""
The connection type for Repository.
"""
type StarredRepositoryConnection{
	"""
	A list of edges.
	"""
	edges: [StarredRepositoryEdge]
	"""
	A list of nodes.
	"""
	nodes: [Repository]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
Represents a starred repository.
"""
type StarredRepositoryEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	node: Repository!
	"""
	Identifies when the item was starred.
	"""
	starredAt: DateTime!
}

"""
The connection type for IssueTimelineItem.
"""
type IssueTimelineConnection{
	"""
	A list of edges.
	"""
	edges: [IssueTimelineItemEdge]
	"""
	A list of nodes.
	"""
	nodes: [IssueTimelineItem]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type IssueTimelineItemEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: IssueTimelineItem
}

"""
An item in an issue timeline
"""
union IssueTimelineItem = AssignedEvent | ClosedEvent | Commit | CrossReferencedEvent | DemilestonedEvent | IssueComment | LabeledEvent | LockedEvent | MilestonedEvent | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent

"""
Various content states of a ProjectCard
"""
enum ProjectCardState{
	"""
	The card has content only.
	"""
	CONTENT_ONLY
	"""
	The card has a note only.
	"""
	NOTE_ONLY
	"""
	The card is redacted.
	"""
	REDACTED
}

"""
The semantic purpose of the column - todo, in progress, or done.
"""
enum ProjectColumnPurpose{
	"""
	The column contains cards which are complete
	"""
	DONE
	"""
	The column contains cards which are currently being worked on
	"""
	IN_PROGRESS
	"""
	The column contains cards still to be worked on
	"""
	TODO
}

"""
An Identity Provider configured to provision SAML and SCIM identities for Organizations
"""
type OrganizationIdentityProvider implements Node{
	"""
	The digest algorithm used to sign SAML requests for the Identity Provider.
	"""
	digestMethod: URI
	"""
	External Identities provisioned by this Identity Provider
	"""
	externalIdentities(
		after: String
		before: String
		first: Int
		last: Int
	): ExternalIdentityConnection!
	id: ID!
	"""
	The x509 certificate used by the Identity Provder to sign assertions and responses.
	"""
	idpCertificate: X509Certificate
	"""
	The Issuer Entity ID for the SAML Identity Provider
	"""
	issuer: String
	"""
	Organization this Identity Provider belongs to
	"""
	organization: Organization
	"""
	The signature algorithm used to sign SAML requests for the Identity Provider.
	"""
	signatureMethod: URI
	"""
	The URL endpoint for the Identity Provider's SAML SSO.
	"""
	ssoUrl: URI
}

"""
The connection type for ExternalIdentity.
"""
type ExternalIdentityConnection{
	"""
	A list of edges.
	"""
	edges: [ExternalIdentityEdge]
	"""
	A list of nodes.
	"""
	nodes: [ExternalIdentity]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type ExternalIdentityEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: ExternalIdentity
}

"""
An external identity provisioned by SAML SSO or SCIM.
"""
type ExternalIdentity implements Node{
	"""
	The GUID for this identity
	"""
	guid: String!
	id: ID!
	"""
	Organization invitation for this SCIM-provisioned external identity
	"""
	organizationInvitation: OrganizationInvitation
	"""
	SAML Identity attributes
	"""
	samlIdentity: ExternalIdentitySamlAttributes
	"""
	SCIM Identity attributes
	"""
	scimIdentity: ExternalIdentityScimAttributes
	"""
	User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member.
	"""
	user: User
}

"""
SAML attributes for the External Identity
"""
type ExternalIdentitySamlAttributes{
	"""
	The NameID of the SAML identity
	"""
	nameId: String
}

"""
SCIM attributes for the External Identity
"""
type ExternalIdentityScimAttributes{
	"""
	The userName of the SCIM identity
	"""
	username: String
}

"""
A valid x509 certificate string
"""
scalar X509Certificate

"""
The role of a user on a team.
"""
enum TeamRole{
	"""
	User has admin rights on the team.
	"""
	ADMIN
	"""
	User is a member of the team.
	"""
	MEMBER
}

"""
Represents the client's rate limit.
"""
type RateLimit{
	"""
	The point cost for the current query counting against the rate limit.
	"""
	cost: Int!
	"""
	The maximum number of points the client is permitted to consume in a 60 minute window.
	"""
	limit: Int!
	"""
	The maximum number of nodes this query may return
	"""
	nodeCount: Int!
	"""
	The number of points remaining in the current rate limit window.
	"""
	remaining: Int!
	"""
	The time at which the current rate limit window resets in UTC epoch seconds.
	"""
	resetAt: DateTime!
}

"""
Represents the individual results of a search.
"""
enum SearchType{
	"""
	Returns results matching issues in repositories.
	"""
	ISSUE
	"""
	Returns results matching repositories.
	"""
	REPOSITORY
	"""
	Returns results matching users and organizations on GitHub.
	"""
	USER
}

"""
A list of results that matched against a search query.
"""
type SearchResultItemConnection{
	"""
	The number of pieces of code that matched the search query.
	"""
	codeCount: Int!
	"""
	A list of edges.
	"""
	edges: [SearchResultItemEdge]
	"""
	The number of issues that matched the search query.
	"""
	issueCount: Int!
	"""
	A list of nodes.
	"""
	nodes: [SearchResultItem]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	The number of repositories that matched the search query.
	"""
	repositoryCount: Int!
	"""
	The number of users that matched the search query.
	"""
	userCount: Int!
	"""
	The number of wiki pages that matched the search query.
	"""
	wikiCount: Int!
}

"""
An edge in a connection.
"""
type SearchResultItemEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: SearchResultItem
	"""
	Text matches on the result found.
	"""
	textMatches: [TextMatch]
}

"""
The results of a search.
"""
union SearchResultItem = Issue | MarketplaceListing | Organization | PullRequest | Repository | User

"""
A text match within a search result.
"""
type TextMatch{
	"""
	The specific text fragment within the property matched on.
	"""
	fragment: String!
	"""
	Highlights within the matched fragment.
	"""
	highlights: [TextMatchHighlight!]!
	"""
	The property matched on.
	"""
	property: String!
}

"""
Represents a single highlight in a search result match.
"""
type TextMatchHighlight{
	"""
	The indice in the fragment where the matched text begins.
	"""
	beginIndice: Int!
	"""
	The indice in the fragment where the matched text ends.
	"""
	endIndice: Int!
	"""
	The text matched.
	"""
	text: String!
}

"""
The root query for implementing GraphQL mutations.
"""
type Mutation{
	"""
	Applies a suggested topic to the repository.
	"""
	acceptTopicSuggestion(
		input: AcceptTopicSuggestionInput!
	): AcceptTopicSuggestionPayload
	"""
	Adds a comment to an Issue or Pull Request.
	"""
	addComment(
		input: AddCommentInput!
	): AddCommentPayload
	"""
	Adds a card to a ProjectColumn. Either \`;contentId\` or \`;note\` must be provided but **not** both.
	"""
	addProjectCard(
		input: AddProjectCardInput!
	): AddProjectCardPayload
	"""
	Adds a column to a Project.
	"""
	addProjectColumn(
		input: AddProjectColumnInput!
	): AddProjectColumnPayload
	"""
	Adds a review to a Pull Request.
	"""
	addPullRequestReview(
		input: AddPullRequestReviewInput!
	): AddPullRequestReviewPayload
	"""
	Adds a comment to a review.
	"""
	addPullRequestReviewComment(
		input: AddPullRequestReviewCommentInput!
	): AddPullRequestReviewCommentPayload
	"""
	Adds a reaction to a subject.
	"""
	addReaction(
		input: AddReactionInput!
	): AddReactionPayload
	"""
	Adds a star to a Starrable.
	"""
	addStar(
		input: AddStarInput!
	): AddStarPayload
	"""
	Creates a new project.
	"""
	createProject(
		input: CreateProjectInput!
	): CreateProjectPayload
	"""
	Rejects a suggested topic for the repository.
	"""
	declineTopicSuggestion(
		input: DeclineTopicSuggestionInput!
	): DeclineTopicSuggestionPayload
	"""
	Deletes a project.
	"""
	deleteProject(
		input: DeleteProjectInput!
	): DeleteProjectPayload
	"""
	Deletes a project card.
	"""
	deleteProjectCard(
		input: DeleteProjectCardInput!
	): DeleteProjectCardPayload
	"""
	Deletes a project column.
	"""
	deleteProjectColumn(
		input: DeleteProjectColumnInput!
	): DeleteProjectColumnPayload
	"""
	Deletes a pull request review.
	"""
	deletePullRequestReview(
		input: DeletePullRequestReviewInput!
	): DeletePullRequestReviewPayload
	"""
	Dismisses an approved or rejected pull request review.
	"""
	dismissPullRequestReview(
		input: DismissPullRequestReviewInput!
	): DismissPullRequestReviewPayload
	"""
	Lock a lockable object
	"""
	lockLockable(
		input: LockLockableInput!
	): LockLockablePayload
	"""
	Moves a project card to another place.
	"""
	moveProjectCard(
		input: MoveProjectCardInput!
	): MoveProjectCardPayload
	"""
	Moves a project column to another place.
	"""
	moveProjectColumn(
		input: MoveProjectColumnInput!
	): MoveProjectColumnPayload
	"""
	Removes outside collaborator from all repositories in an organization.
	"""
	removeOutsideCollaborator(
		input: RemoveOutsideCollaboratorInput!
	): RemoveOutsideCollaboratorPayload
	"""
	Removes a reaction from a subject.
	"""
	removeReaction(
		input: RemoveReactionInput!
	): RemoveReactionPayload
	"""
	Removes a star from a Starrable.
	"""
	removeStar(
		input: RemoveStarInput!
	): RemoveStarPayload
	"""
	Set review requests on a pull request.
	"""
	requestReviews(
		input: RequestReviewsInput!
	): RequestReviewsPayload
	"""
	Submits a pending pull request review.
	"""
	submitPullRequestReview(
		input: SubmitPullRequestReviewInput!
	): SubmitPullRequestReviewPayload
	"""
	Unlock a lockable object
	"""
	unlockLockable(
		input: UnlockLockableInput!
	): UnlockLockablePayload
	"""
	Updates an existing project.
	"""
	updateProject(
		input: UpdateProjectInput!
	): UpdateProjectPayload
	"""
	Updates an existing project card.
	"""
	updateProjectCard(
		input: UpdateProjectCardInput!
	): UpdateProjectCardPayload
	"""
	Updates an existing project column.
	"""
	updateProjectColumn(
		input: UpdateProjectColumnInput!
	): UpdateProjectColumnPayload
	"""
	Updates the body of a pull request review.
	"""
	updatePullRequestReview(
		input: UpdatePullRequestReviewInput!
	): UpdatePullRequestReviewPayload
	"""
	Updates a pull request review comment.
	"""
	updatePullRequestReviewComment(
		input: UpdatePullRequestReviewCommentInput!
	): UpdatePullRequestReviewCommentPayload
	"""
	Updates the state for subscribable subjects.
	"""
	updateSubscription(
		input: UpdateSubscriptionInput!
	): UpdateSubscriptionPayload
	"""
	Replaces the repository's topics with the given topics.
	"""
	updateTopics(
		input: UpdateTopicsInput!
	): UpdateTopicsPayload
}

"""
Autogenerated input type of AcceptTopicSuggestion
"""
input AcceptTopicSuggestionInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of the suggested topic.
	"""
	name: String!
	"""
	The Node ID of the repository.
	"""
	repositoryId: ID!
}

"""
Autogenerated return type of AcceptTopicSuggestion
"""
type AcceptTopicSuggestionPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The accepted topic.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;topic\` will change from \`;Topic!\` to \`;Topic\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	topic: Topic!
}

"""
Autogenerated input type of AddComment
"""
input AddCommentInput{
	"""
	The contents of the comment.
	"""
	body: String!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Node ID of the subject to modify.
	"""
	subjectId: ID!
}

"""
Autogenerated return type of AddComment
"""
type AddCommentPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The edge from the subject's comment connection.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;commentEdge\` will change from \`;IssueCommentEdge!\` to \`;IssueCommentEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	commentEdge: IssueCommentEdge!
	"""
													The subject
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;subject\` will change from \`;Node!\` to \`;Node\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	subject: Node!
	"""
													The edge from the subject's timeline connection.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;timelineEdge\` will change from \`;IssueTimelineItemEdge!\` to \`;IssueTimelineItemEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	timelineEdge: IssueTimelineItemEdge!
}

"""
Autogenerated input type of AddProjectCard
"""
input AddProjectCardInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The content of the card. Must be a member of the ProjectCardItem union
	"""
	contentId: ID
	"""
	The note on the card.
	"""
	note: String
	"""
	The Node ID of the ProjectColumn.
	"""
	projectColumnId: ID!
}

"""
Autogenerated return type of AddProjectCard
"""
type AddProjectCardPayload{
	"""
													The edge from the ProjectColumn's card connection.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;cardEdge\` will change from \`;ProjectCardEdge!\` to \`;ProjectCardEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	cardEdge: ProjectCardEdge!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The ProjectColumn
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;projectColumn\` will change from \`;Project!\` to \`;Project\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	projectColumn: Project!
}

"""
Autogenerated input type of AddProjectColumn
"""
input AddProjectColumnInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of the column.
	"""
	name: String!
	"""
	The Node ID of the project.
	"""
	projectId: ID!
}

"""
Autogenerated return type of AddProjectColumn
"""
type AddProjectColumnPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The edge from the project's column connection.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;columnEdge\` will change from \`;ProjectColumnEdge!\` to \`;ProjectColumnEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	columnEdge: ProjectColumnEdge!
	"""
													The project
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;project\` will change from \`;Project!\` to \`;Project\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	project: Project!
}

"""
Autogenerated input type of AddPullRequestReview
"""
input AddPullRequestReviewInput{
	"""
	The contents of the review body comment.
	"""
	body: String
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The review line comments.
	"""
	comments: [DraftPullRequestReviewComment]
	"""
	The commit OID the review pertains to.
	"""
	commitOID: GitObjectID
	"""
	The event to perform on the pull request review.
	"""
	event: PullRequestReviewEvent
	"""
	The Node ID of the pull request to modify.
	"""
	pullRequestId: ID!
}

"""
Specifies a review comment to be left with a Pull Request Review.
"""
input DraftPullRequestReviewComment{
	"""
	Body of the comment to leave.
	"""
	body: String!
	"""
	Path to the file being commented on.
	"""
	path: String!
	"""
	Position in the file to leave a comment on.
	"""
	position: Int!
}

"""
The possible events to perform on a pull request review.
"""
enum PullRequestReviewEvent{
	"""
	Submit feedback and approve merging these changes.
	"""
	APPROVE
	"""
	Submit general feedback without explicit approval.
	"""
	COMMENT
	"""
	Dismiss review so it now longer effects merging.
	"""
	DISMISS
	"""
	Submit feedback that must be addressed before merging.
	"""
	REQUEST_CHANGES
}

"""
Autogenerated return type of AddPullRequestReview
"""
type AddPullRequestReviewPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The newly created pull request review.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;pullRequestReview\` will change from \`;PullRequestReview!\` to \`;PullRequestReview\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	pullRequestReview: PullRequestReview!
	"""
													The edge from the pull request's review connection.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;reviewEdge\` will change from \`;PullRequestReviewEdge!\` to \`;PullRequestReviewEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	reviewEdge: PullRequestReviewEdge!
}

"""
Autogenerated input type of AddPullRequestReviewComment
"""
input AddPullRequestReviewCommentInput{
	"""
	The text of the comment.
	"""
	body: String!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The SHA of the commit to comment on.
	"""
	commitOID: GitObjectID
	"""
	The comment id to reply to.
	"""
	inReplyTo: ID
	"""
	The relative path of the file to comment on.
	"""
	path: String
	"""
	The line index in the diff to comment on.
	"""
	position: Int
	"""
	The Node ID of the review to modify.
	"""
	pullRequestReviewId: ID!
}

"""
Autogenerated return type of AddPullRequestReviewComment
"""
type AddPullRequestReviewCommentPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The newly created comment.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;comment\` will change from \`;PullRequestReviewComment!\` to \`;PullRequestReviewComment\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	comment: PullRequestReviewComment!
	"""
													The edge from the review's comment connection.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;commentEdge\` will change from
  \`;PullRequestReviewCommentEdge!\` to \`;PullRequestReviewCommentEdge\`.
  **Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	commentEdge: PullRequestReviewCommentEdge!
}

"""
Autogenerated input type of AddReaction
"""
input AddReactionInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of the emoji to react with.
	"""
	content: ReactionContent!
	"""
	The Node ID of the subject to modify.
	"""
	subjectId: ID!
}

"""
Autogenerated return type of AddReaction
"""
type AddReactionPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The reaction object.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;reaction\` will change from \`;Reaction!\` to \`;Reaction\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	reaction: Reaction!
	"""
													The reactable subject.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;subject\` will change from \`;Reactable!\` to \`;Reactable\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	subject: Reactable!
}

"""
Autogenerated input type of AddStar
"""
input AddStarInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Starrable ID to star.
	"""
	starrableId: ID!
}

"""
Autogenerated return type of AddStar
"""
type AddStarPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The starrable.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;starrable\` will change from \`;Starrable!\` to \`;Starrable\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	starrable: Starrable!
}

"""
Autogenerated input type of CreateProject
"""
input CreateProjectInput{
	"""
	The description of project.
	"""
	body: String
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of project.
	"""
	name: String!
	"""
	The owner ID to create the project under.
	"""
	ownerId: ID!
}

"""
Autogenerated return type of CreateProject
"""
type CreateProjectPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The new project.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;project\` will change from \`;Project!\` to \`;Project\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	project: Project!
}

"""
Autogenerated input type of DeclineTopicSuggestion
"""
input DeclineTopicSuggestionInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of the suggested topic.
	"""
	name: String!
	"""
	The reason why the suggested topic is declined.
	"""
	reason: TopicSuggestionDeclineReason!
	"""
	The Node ID of the repository.
	"""
	repositoryId: ID!
}

"""
Reason that the suggested topic is declined.
"""
enum TopicSuggestionDeclineReason{
	"""
	The suggested topic is not relevant to the repository.
	"""
	NOT_RELEVANT
	"""
	The viewer does not like the suggested topic.
	"""
	PERSONAL_PREFERENCE
	"""
	The suggested topic is too general for the repository.
	"""
	TOO_GENERAL
	"""
	The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1).
	"""
	TOO_SPECIFIC
}

"""
Autogenerated return type of DeclineTopicSuggestion
"""
type DeclineTopicSuggestionPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The declined topic.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;topic\` will change from \`;Topic!\` to \`;Topic\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	topic: Topic!
}

"""
Autogenerated input type of DeleteProject
"""
input DeleteProjectInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Project ID to update.
	"""
	projectId: ID!
}

"""
Autogenerated return type of DeleteProject
"""
type DeleteProjectPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The repository or organization the project was removed from.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;owner\` will change from \`;ProjectOwner!\` to \`;ProjectOwner\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	owner: ProjectOwner!
}

"""
Autogenerated input type of DeleteProjectCard
"""
input DeleteProjectCardInput{
	"""
	The id of the card to delete.
	"""
	cardId: ID!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
}

"""
Autogenerated return type of DeleteProjectCard
"""
type DeleteProjectCardPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The column the deleted card was in.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;column\` will change from \`;ProjectColumn!\` to \`;ProjectColumn\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	column: ProjectColumn!
	"""
													The deleted card ID.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;deletedCardId\` will change from \`;ID!\` to \`;ID\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	deletedCardId: ID!
}

"""
Autogenerated input type of DeleteProjectColumn
"""
input DeleteProjectColumnInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The id of the column to delete.
	"""
	columnId: ID!
}

"""
Autogenerated return type of DeleteProjectColumn
"""
type DeleteProjectColumnPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The deleted column ID.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;deletedColumnId\` will change from \`;ID!\` to \`;ID\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	deletedColumnId: ID!
	"""
													The project the deleted column was in.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;project\` will change from \`;Project!\` to \`;Project\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	project: Project!
}

"""
Autogenerated input type of DeletePullRequestReview
"""
input DeletePullRequestReviewInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Node ID of the pull request review to delete.
	"""
	pullRequestReviewId: ID!
}

"""
Autogenerated return type of DeletePullRequestReview
"""
type DeletePullRequestReviewPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The deleted pull request review.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;pullRequestReview\` will change from \`;PullRequestReview!\` to \`;PullRequestReview\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	pullRequestReview: PullRequestReview!
}

"""
Autogenerated input type of DismissPullRequestReview
"""
input DismissPullRequestReviewInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The contents of the pull request review dismissal message.
	"""
	message: String!
	"""
	The Node ID of the pull request review to modify.
	"""
	pullRequestReviewId: ID!
}

"""
Autogenerated return type of DismissPullRequestReview
"""
type DismissPullRequestReviewPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The dismissed pull request review.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;pullRequestReview\` will change from \`;PullRequestReview!\` to \`;PullRequestReview\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	pullRequestReview: PullRequestReview!
}

"""
Autogenerated input type of LockLockable
"""
input LockLockableInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	A reason for why the issue or pull request will be locked.
	"""
	lockReason: LockReason
	"""
	ID of the issue or pull request to be locked.
	"""
	lockableId: ID!
}

"""
Autogenerated return type of LockLockable
"""
type LockLockablePayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The item that was locked.
	"""
	lockedRecord: Lockable
}

"""
Autogenerated input type of MoveProjectCard
"""
input MoveProjectCardInput{
	"""
	Place the new card after the card with this id. Pass null to place it at the top.
	"""
	afterCardId: ID
	"""
	The id of the card to move.
	"""
	cardId: ID!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The id of the column to move it into.
	"""
	columnId: ID!
}

"""
Autogenerated return type of MoveProjectCard
"""
type MoveProjectCardPayload{
	"""
													The new edge of the moved card.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;cardEdge\` will change from \`;ProjectCardEdge!\` to \`;ProjectCardEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	cardEdge: ProjectCardEdge!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
}

"""
Autogenerated input type of MoveProjectColumn
"""
input MoveProjectColumnInput{
	"""
	Place the new column after the column with this id. Pass null to place it at the front.
	"""
	afterColumnId: ID
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The id of the column to move.
	"""
	columnId: ID!
}

"""
Autogenerated return type of MoveProjectColumn
"""
type MoveProjectColumnPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The new edge of the moved column.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;columnEdge\` will change from \`;ProjectColumnEdge!\` to \`;ProjectColumnEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	columnEdge: ProjectColumnEdge!
}

"""
Autogenerated input type of RemoveOutsideCollaborator
"""
input RemoveOutsideCollaboratorInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The ID of the organization to remove the outside collaborator from.
	"""
	organizationId: ID!
	"""
	The ID of the outside collaborator to remove.
	"""
	userId: ID!
}

"""
Autogenerated return type of RemoveOutsideCollaborator
"""
type RemoveOutsideCollaboratorPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The user that was removed as an outside collaborator.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;removedUser\` will change from \`;User!\` to \`;User\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	removedUser: User!
}

"""
Autogenerated input type of RemoveReaction
"""
input RemoveReactionInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of the emoji reaction to remove.
	"""
	content: ReactionContent!
	"""
	The Node ID of the subject to modify.
	"""
	subjectId: ID!
}

"""
Autogenerated return type of RemoveReaction
"""
type RemoveReactionPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The reaction object.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;reaction\` will change from \`;Reaction!\` to \`;Reaction\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	reaction: Reaction!
	"""
													The reactable subject.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;subject\` will change from \`;Reactable!\` to \`;Reactable\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	subject: Reactable!
}

"""
Autogenerated input type of RemoveStar
"""
input RemoveStarInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Starrable ID to unstar.
	"""
	starrableId: ID!
}

"""
Autogenerated return type of RemoveStar
"""
type RemoveStarPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The starrable.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;starrable\` will change from \`;Starrable!\` to \`;Starrable\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	starrable: Starrable!
}

"""
Autogenerated input type of RequestReviews
"""
input RequestReviewsInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Node ID of the pull request to modify.
	"""
	pullRequestId: ID!
	"""
	The Node IDs of the team to request.
	"""
	teamIds: [ID!]
	"""
	Add users to the set rather than replace.
	"""
	union: Boolean
	"""
	The Node IDs of the user to request.
	"""
	userIds: [ID!]
}

"""
Autogenerated return type of RequestReviews
"""
type RequestReviewsPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The pull request that is getting requests.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;pullRequest\` will change from \`;PullRequest!\` to \`;PullRequest\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	pullRequest: PullRequest!
	"""
													The edge from the pull request to the requested reviewers.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;requestedReviewersEdge\` will change from \`;UserEdge!\` to \`;UserEdge\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	requestedReviewersEdge: UserEdge!
}

"""
Autogenerated input type of SubmitPullRequestReview
"""
input SubmitPullRequestReviewInput{
	"""
	The text field to set on the Pull Request Review.
	"""
	body: String
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The event to send to the Pull Request Review.
	"""
	event: PullRequestReviewEvent!
	"""
	The Pull Request Review ID to submit.
	"""
	pullRequestReviewId: ID!
}

"""
Autogenerated return type of SubmitPullRequestReview
"""
type SubmitPullRequestReviewPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The submitted pull request review.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;pullRequestReview\` will change from \`;PullRequestReview!\` to \`;PullRequestReview\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	pullRequestReview: PullRequestReview!
}

"""
Autogenerated input type of UnlockLockable
"""
input UnlockLockableInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	ID of the issue or pull request to be unlocked.
	"""
	lockableId: ID!
}

"""
Autogenerated return type of UnlockLockable
"""
type UnlockLockablePayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The item that was unlocked.
	"""
	unlockedRecord: Lockable
}

"""
Autogenerated input type of UpdateProject
"""
input UpdateProjectInput{
	"""
	The description of project.
	"""
	body: String
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of project.
	"""
	name: String
	"""
	The Project ID to update.
	"""
	projectId: ID!
	"""
	Whether the project is public or not.
	"""
	public: Boolean
	"""
	Whether the project is open or closed.
	"""
	state: ProjectState
}

"""
Autogenerated return type of UpdateProject
"""
type UpdateProjectPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The updated project.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;project\` will change from \`;Project!\` to \`;Project\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	project: Project!
}

"""
Autogenerated input type of UpdateProjectCard
"""
input UpdateProjectCardInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	Whether or not the ProjectCard should be archived
	"""
	isArchived: Boolean
	"""
	The note of ProjectCard.
	"""
	note: String
	"""
	The ProjectCard ID to update.
	"""
	projectCardId: ID!
}

"""
Autogenerated return type of UpdateProjectCard
"""
type UpdateProjectCardPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The updated ProjectCard.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;projectCard\` will change from \`;ProjectCard!\` to \`;ProjectCard\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	projectCard: ProjectCard!
}

"""
Autogenerated input type of UpdateProjectColumn
"""
input UpdateProjectColumnInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The name of project column.
	"""
	name: String!
	"""
	The ProjectColumn ID to update.
	"""
	projectColumnId: ID!
}

"""
Autogenerated return type of UpdateProjectColumn
"""
type UpdateProjectColumnPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The updated project column.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;projectColumn\` will change from \`;ProjectColumn!\` to \`;ProjectColumn\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	projectColumn: ProjectColumn!
}

"""
Autogenerated input type of UpdatePullRequestReview
"""
input UpdatePullRequestReviewInput{
	"""
	The contents of the pull request review body.
	"""
	body: String!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Node ID of the pull request review to modify.
	"""
	pullRequestReviewId: ID!
}

"""
Autogenerated return type of UpdatePullRequestReview
"""
type UpdatePullRequestReviewPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The updated pull request review.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;pullRequestReview\` will change from \`;PullRequestReview!\` to \`;PullRequestReview\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	pullRequestReview: PullRequestReview!
}

"""
Autogenerated input type of UpdatePullRequestReviewComment
"""
input UpdatePullRequestReviewCommentInput{
	"""
	The text of the comment.
	"""
	body: String!
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Node ID of the comment to modify.
	"""
	pullRequestReviewCommentId: ID!
}

"""
Autogenerated return type of UpdatePullRequestReviewComment
"""
type UpdatePullRequestReviewCommentPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The updated comment.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;pullRequestReviewComment\` will change from
  \`;PullRequestReviewComment!\` to \`;PullRequestReviewComment\`.
  **Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	pullRequestReviewComment: PullRequestReviewComment!
}

"""
Autogenerated input type of UpdateSubscription
"""
input UpdateSubscriptionInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The new state of the subscription.
	"""
	state: SubscriptionState!
	"""
	The Node ID of the subscribable object to modify.
	"""
	subscribableId: ID!
}

"""
Autogenerated return type of UpdateSubscription
"""
type UpdateSubscriptionPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
													The input subscribable entity.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;subscribable\` will change from \`;Subscribable!\` to \`;Subscribable\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	subscribable: Subscribable!
}

"""
Autogenerated input type of UpdateTopics
"""
input UpdateTopicsInput{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	The Node ID of the repository.
	"""
	repositoryId: ID!
	"""
	An array of topic names.
	"""
	topicNames: [String!]!
}

"""
Autogenerated return type of UpdateTopics
"""
type UpdateTopicsPayload{
	"""
	A unique identifier for the client performing the mutation.
	"""
	clientMutationId: String
	"""
	Names of the provided topics that are not valid.
	"""
	invalidTopicNames: [String!]
	"""
													The updated repository.
**Upcoming Change on 2019-01-01 UTC**
**Description:** Type for \`;repository\` will change from \`;Repository!\` to \`;Repository\`.
**Reason:** In preparation for an upcoming change to the way we report
mutation errors, non-nullable payload fields are becoming nullable.
	"""
	repository: Repository!
}

"""
Represents a 'added_to_project' event on a given issue or pull request.
"""
type AddedToProjectEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
}

"""
An edge in a connection.
"""
type AppEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: App
}

"""
Represents a 'base_ref_changed' event on a given issue or pull request.
"""
type BaseRefChangedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
}

"""
Represents a Git blob.
"""
type Blob implements GitObject & Node{
	"""
	An abbreviated version of the Git object ID
	"""
	abbreviatedOid: String!
	"""
	Byte size of Blob object
	"""
	byteSize: Int!
	"""
	The HTTP path for this Git object
	"""
	commitResourcePath: URI!
	"""
	The HTTP URL for this Git object
	"""
	commitUrl: URI!
	id: ID!
	"""
	Indicates whether the Blob is binary or text
	"""
	isBinary: Boolean!
	"""
	Indicates whether the contents is truncated
	"""
	isTruncated: Boolean!
	"""
	The Git object ID
	"""
	oid: GitObjectID!
	"""
	The Repository the Git object belongs to
	"""
	repository: Repository!
	"""
	UTF8 text data or null if the Blob is binary
	"""
	text: String
}

"""
A special type of user which takes actions on behalf of GitHub Apps.
"""
type Bot implements Actor & Node & UniformResourceLocatable{
	"""
	A URL pointing to the GitHub App's public avatar.
	"""
	avatarUrl(
		size: Int
	): URI!
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
	"""
	The username of the actor.
	"""
	login: String!
	"""
	The HTTP path for this bot
	"""
	resourcePath: URI!
	"""
	Identifies the date and time when the object was last updated.
	"""
	updatedAt: DateTime!
	"""
	The HTTP URL for this bot
	"""
	url: URI!
}

"""
Types that can be inside Collection Items.
"""
union CollectionItemContent = Organization | Repository | User

"""
Represents a 'comment_deleted' event on a given issue or pull request.
"""
type CommentDeletedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
}

"""
Represents a 'converted_note_to_issue' event on a given issue or pull request.
"""
type ConvertedNoteToIssueEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
}

"""
An ISO-8601 encoded date string.
"""
scalar Date

"""
The possible default permissions for repositories.
"""
enum DefaultRepositoryPermissionField{
	"""
	Can read, write, and administrate repos by default
	"""
	ADMIN
	"""
	No access
	"""
	NONE
	"""
	Can read repos by default
	"""
	READ
	"""
	Can read and write repos by default
	"""
	WRITE
}

"""
Represents a GPG signature on a Commit or Tag.
"""
type GpgSignature implements GitSignature{
	"""
	Email used to sign this object.
	"""
	email: String!
	"""
	True if the signature is valid and verified by GitHub.
	"""
	isValid: Boolean!
	"""
	Hex-encoded ID of the key that signed this object.
	"""
	keyId: String
	"""
	Payload for GPG signing object. Raw ODB object without the signature header.
	"""
	payload: String!
	"""
	ASCII-armored signature header from object.
	"""
	signature: String!
	"""
	GitHub user corresponding to the email signing this commit.
	"""
	signer: User
	"""
															The state of this signature. \`;VALID\` if signature is valid and verified by
GitHub, otherwise represents reason why signature is considered invalid.
	"""
	state: GitSignatureState!
	"""
	True if the signature was made with GitHub's signing key.
	"""
	wasSignedByGitHub: Boolean!
}

"""
The possible PubSub channels for an issue.
"""
enum IssuePubSubTopic{
	"""
	The channel ID for marking an issue as read.
	"""
	MARKASREAD
	"""
	The channel ID for updating items on the issue timeline.
	"""
	TIMELINE
	"""
	The channel ID for observing issue updates.
	"""
	UPDATED
}

"""
An item in an issue timeline
"""
union IssueTimelineItems = AddedToProjectEvent | AssignedEvent | ClosedEvent | CommentDeletedEvent | ConvertedNoteToIssueEvent | CrossReferencedEvent | DemilestonedEvent | IssueComment | LabeledEvent | LockedEvent | MentionedEvent | MilestonedEvent | MovedColumnsInProjectEvent | ReferencedEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent

"""
Represents a 'mentioned' event on a given issue or pull request.
"""
type MentionedEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
}

"""
Represents a 'moved_columns_in_project' event on a given issue or pull request.
"""
type MovedColumnsInProjectEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
}

"""
Represents a 'removed_from_project' event on a given issue or pull request.
"""
type RemovedFromProjectEvent implements Node{
	"""
	Identifies the actor who performed the event.
	"""
	actor: Actor
	"""
	Identifies the date and time when the object was created.
	"""
	createdAt: DateTime!
	"""
	Identifies the primary key from the database.
	"""
	databaseId: Int
	id: ID!
}

"""
An edge in a connection.
"""
type IssueTimelineItemsEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: IssueTimelineItems
}

"""
The possible item types found in a timeline.
"""
enum IssueTimelineItemsItemType{
	"""
	Represents a 'added_to_project' event on a given issue or pull request.
	"""
	ADDED_TO_PROJECT_EVENT
	"""
	Represents an 'assigned' event on any assignable object.
	"""
	ASSIGNED_EVENT
	"""
	Represents a 'closed' event on any \`;Closable\`.
	"""
	CLOSED_EVENT
	"""
	Represents a 'comment_deleted' event on a given issue or pull request.
	"""
	COMMENT_DELETED_EVENT
	"""
	Represents a 'converted_note_to_issue' event on a given issue or pull request.
	"""
	CONVERTED_NOTE_TO_ISSUE_EVENT
	"""
	Represents a mention made by one issue or pull request to another.
	"""
	CROSS_REFERENCED_EVENT
	"""
	Represents a 'demilestoned' event on a given issue or pull request.
	"""
	DEMILESTONED_EVENT
	"""
	Represents a comment on an Issue.
	"""
	ISSUE_COMMENT
	"""
	Represents a 'labeled' event on a given issue or pull request.
	"""
	LABELED_EVENT
	"""
	Represents a 'locked' event on a given issue or pull request.
	"""
	LOCKED_EVENT
	"""
	Represents a 'mentioned' event on a given issue or pull request.
	"""
	MENTIONED_EVENT
	"""
	Represents a 'milestoned' event on a given issue or pull request.
	"""
	MILESTONED_EVENT
	"""
	Represents a 'moved_columns_in_project' event on a given issue or pull request.
	"""
	MOVED_COLUMNS_IN_PROJECT_EVENT
	"""
	Represents a 'referenced' event on a given \`;ReferencedSubject\`.
	"""
	REFERENCED_EVENT
	"""
	Represents a 'removed_from_project' event on a given issue or pull request.
	"""
	REMOVED_FROM_PROJECT_EVENT
	"""
	Represents a 'renamed' event on a given issue or pull request
	"""
	RENAMED_TITLE_EVENT
	"""
	Represents a 'reopened' event on any \`;Closable\`.
	"""
	REOPENED_EVENT
	"""
	Represents a 'subscribed' event on a given \`;Subscribable\`.
	"""
	SUBSCRIBED_EVENT
	"""
	Represents an 'unassigned' event on any assignable object.
	"""
	UNASSIGNED_EVENT
	"""
	Represents an 'unlabeled' event on a given issue or pull request.
	"""
	UNLABELED_EVENT
	"""
	Represents an 'unlocked' event on a given issue or pull request.
	"""
	UNLOCKED_EVENT
	"""
	Represents an 'unsubscribed' event on a given \`;Subscribable\`.
	"""
	UNSUBSCRIBED_EVENT
}

"""
An edge in a connection.
"""
type MarketplaceCategoryEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: MarketplaceCategory
}

"""
Ways in which lists of issues can be ordered upon return.
"""
input PullRequestOrder{
	"""
	The direction in which to order pull requests by the specified field.
	"""
	direction: OrderDirection!
	"""
	The field in which to order pull requests by.
	"""
	field: PullRequestOrderField!
}

"""
Properties by which pull_requests connections can be ordered.
"""
enum PullRequestOrderField{
	"""
	Order pull_requests by creation time
	"""
	CREATED_AT
	"""
	Order pull_requests by update time
	"""
	UPDATED_AT
}

"""
The possible PubSub channels for a pull request.
"""
enum PullRequestPubSubTopic{
	"""
	The channel ID for observing head ref updates.
	"""
	HEAD_REF
	"""
	The channel ID for marking an pull request as read.
	"""
	MARKASREAD
	"""
	The channel ID for updating items on the pull request timeline.
	"""
	TIMELINE
	"""
	The channel ID for observing pull request updates.
	"""
	UPDATED
}

"""
An item in a pull request timeline
"""
union PullRequestTimelineItems = AddedToProjectEvent | AssignedEvent | BaseRefChangedEvent | BaseRefForcePushedEvent | ClosedEvent | CommentDeletedEvent | ConvertedNoteToIssueEvent | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MentionedEvent | MergedEvent | MilestonedEvent | MovedColumnsInProjectEvent | PullRequestCommit | PullRequestReview | PullRequestReviewThread | ReferencedEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent

"""
An edge in a connection.
"""
type PullRequestTimelineItemsEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: PullRequestTimelineItems
}

"""
The possible item types found in a timeline.
"""
enum PullRequestTimelineItemsItemType{
	"""
	Represents a 'added_to_project' event on a given issue or pull request.
	"""
	ADDED_TO_PROJECT_EVENT
	"""
	Represents an 'assigned' event on any assignable object.
	"""
	ASSIGNED_EVENT
	"""
	Represents a 'base_ref_changed' event on a given issue or pull request.
	"""
	BASE_REF_CHANGED_EVENT
	"""
	Represents a 'base_ref_force_pushed' event on a given pull request.
	"""
	BASE_REF_FORCE_PUSHED_EVENT
	"""
	Represents a 'closed' event on any \`;Closable\`.
	"""
	CLOSED_EVENT
	"""
	Represents a 'comment_deleted' event on a given issue or pull request.
	"""
	COMMENT_DELETED_EVENT
	"""
	Represents a 'converted_note_to_issue' event on a given issue or pull request.
	"""
	CONVERTED_NOTE_TO_ISSUE_EVENT
	"""
	Represents a mention made by one issue or pull request to another.
	"""
	CROSS_REFERENCED_EVENT
	"""
	Represents a 'demilestoned' event on a given issue or pull request.
	"""
	DEMILESTONED_EVENT
	"""
	Represents a 'deployed' event on a given pull request.
	"""
	DEPLOYED_EVENT
	"""
	Represents a 'deployment_environment_changed' event on a given pull request.
	"""
	DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT
	"""
	Represents a 'head_ref_deleted' event on a given pull request.
	"""
	HEAD_REF_DELETED_EVENT
	"""
	Represents a 'head_ref_force_pushed' event on a given pull request.
	"""
	HEAD_REF_FORCE_PUSHED_EVENT
	"""
	Represents a 'head_ref_restored' event on a given pull request.
	"""
	HEAD_REF_RESTORED_EVENT
	"""
	Represents a comment on an Issue.
	"""
	ISSUE_COMMENT
	"""
	Represents a 'labeled' event on a given issue or pull request.
	"""
	LABELED_EVENT
	"""
	Represents a 'locked' event on a given issue or pull request.
	"""
	LOCKED_EVENT
	"""
	Represents a 'mentioned' event on a given issue or pull request.
	"""
	MENTIONED_EVENT
	"""
	Represents a 'merged' event on a given pull request.
	"""
	MERGED_EVENT
	"""
	Represents a 'milestoned' event on a given issue or pull request.
	"""
	MILESTONED_EVENT
	"""
	Represents a 'moved_columns_in_project' event on a given issue or pull request.
	"""
	MOVED_COLUMNS_IN_PROJECT_EVENT
	"""
	Represents a Git commit part of a pull request.
	"""
	PULL_REQUEST_COMMIT
	"""
	Represents a commit comment thread part of a pull request.
	"""
	PULL_REQUEST_COMMIT_COMMENT_THREAD
	"""
	A review object for a given pull request.
	"""
	PULL_REQUEST_REVIEW
	"""
	A threaded list of comments for a given pull request.
	"""
	PULL_REQUEST_REVIEW_THREAD
	"""
	Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits.
	"""
	PULL_REQUEST_REVISION_MARKER
	"""
	Represents a 'referenced' event on a given \`;ReferencedSubject\`.
	"""
	REFERENCED_EVENT
	"""
	Represents a 'removed_from_project' event on a given issue or pull request.
	"""
	REMOVED_FROM_PROJECT_EVENT
	"""
	Represents a 'renamed' event on a given issue or pull request
	"""
	RENAMED_TITLE_EVENT
	"""
	Represents a 'reopened' event on any \`;Closable\`.
	"""
	REOPENED_EVENT
	"""
	Represents a 'review_dismissed' event on a given issue or pull request.
	"""
	REVIEW_DISMISSED_EVENT
	"""
	Represents an 'review_requested' event on a given pull request.
	"""
	REVIEW_REQUESTED_EVENT
	"""
	Represents an 'review_request_removed' event on a given pull request.
	"""
	REVIEW_REQUEST_REMOVED_EVENT
	"""
	Represents a 'subscribed' event on a given \`;Subscribable\`.
	"""
	SUBSCRIBED_EVENT
	"""
	Represents an 'unassigned' event on any assignable object.
	"""
	UNASSIGNED_EVENT
	"""
	Represents an 'unlabeled' event on a given issue or pull request.
	"""
	UNLABELED_EVENT
	"""
	Represents an 'unlocked' event on a given issue or pull request.
	"""
	UNLOCKED_EVENT
	"""
	Represents an 'unsubscribed' event on a given \`;Subscribable\`.
	"""
	UNSUBSCRIBED_EVENT
}

"""
The affiliation type between collaborator and repository.
"""
enum RepositoryCollaboratorAffiliation{
	"""
	All collaborators of the repository.
	"""
	ALL
	"""
	All outside collaborators of an organization-owned repository.
	"""
	OUTSIDE
}

"""
An invitation for a user to be added to a repository.
"""
type RepositoryInvitation implements Node{
	id: ID!
	"""
	The user who received the invitation.
	"""
	invitee: User!
	"""
	The user who created the invitation.
	"""
	inviter: User!
	"""
	The permission granted on this repository by this invitation.
	"""
	permission: RepositoryPermission!
	"""
	The Repository the user is invited to.
	"""
	repository: RepositoryInfo
}

"""
An edge in a connection.
"""
type RepositoryInvitationEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: RepositoryInvitation
}

"""
Represents an S/MIME signature on a Commit or Tag.
"""
type SmimeSignature implements GitSignature{
	"""
	Email used to sign this object.
	"""
	email: String!
	"""
	True if the signature is valid and verified by GitHub.
	"""
	isValid: Boolean!
	"""
	Payload for GPG signing object. Raw ODB object without the signature header.
	"""
	payload: String!
	"""
	ASCII-armored signature header from object.
	"""
	signature: String!
	"""
	GitHub user corresponding to the email signing this commit.
	"""
	signer: User
	"""
															The state of this signature. \`;VALID\` if signature is valid and verified by
GitHub, otherwise represents reason why signature is considered invalid.
	"""
	state: GitSignatureState!
	"""
	True if the signature was made with GitHub's signing key.
	"""
	wasSignedByGitHub: Boolean!
}

"""
Represents a Git tag.
"""
type Tag implements GitObject & Node{
	"""
	An abbreviated version of the Git object ID
	"""
	abbreviatedOid: String!
	"""
	The HTTP path for this Git object
	"""
	commitResourcePath: URI!
	"""
	The HTTP URL for this Git object
	"""
	commitUrl: URI!
	id: ID!
	"""
	The Git tag message.
	"""
	message: String
	"""
	The Git tag name.
	"""
	name: String!
	"""
	The Git object ID
	"""
	oid: GitObjectID!
	"""
	The Repository the Git object belongs to
	"""
	repository: Repository!
	"""
	Details about the tag author.
	"""
	tagger: GitActor
	"""
	The Git object the tag points to.
	"""
	target: GitObject!
}

"""
The connection type for Topic.
"""
type TopicConnection{
	"""
	A list of edges.
	"""
	edges: [TopicEdge]
	"""
	A list of nodes.
	"""
	nodes: [Topic]
	"""
	Information to aid in pagination.
	"""
	pageInfo: PageInfo!
	"""
	Identifies the total count of items in the connection.
	"""
	totalCount: Int!
}

"""
An edge in a connection.
"""
type TopicEdge{
	"""
	A cursor for use in pagination.
	"""
	cursor: String!
	"""
	The item at the end of the edge.
	"""
	node: Topic
}

"""
Represents an unknown signature on a Commit or Tag.
"""
type UnknownSignature implements GitSignature{
	"""
	Email used to sign this object.
	"""
	email: String!
	"""
	True if the signature is valid and verified by GitHub.
	"""
	isValid: Boolean!
	"""
	Payload for GPG signing object. Raw ODB object without the signature header.
	"""
	payload: String!
	"""
	ASCII-armored signature header from object.
	"""
	signature: String!
	"""
	GitHub user corresponding to the email signing this commit.
	"""
	signer: User
	"""
															The state of this signature. \`;VALID\` if signature is valid and verified by
GitHub, otherwise represents reason why signature is considered invalid.
	"""
	state: GitSignatureState!
	"""
	True if the signature was made with GitHub's signing key.
	"""
	wasSignedByGitHub: Boolean!
}
schema{
	query: Query,
	mutation: Mutation
}
`;
