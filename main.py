# First API

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles


class Player(BaseModel):
    name: str
    role: str
    wickets: int
    runs: int
    stumpings: int


app = FastAPI()


# @app.get("/")
# def return_message():
# return "TVK API is running successfully"

# ------players----

players = [
    {
        "id": 1,
        "name": "Anusayan",
        "role": "Wicket-keeper & batsman",
        "image": "anusayan.jpeg"
    },
    {
        "id": 2,
        "name": "Thananjayan",
        "role": "Spin bowler & batsman",
        "image": "thanu.jpeg"
    },
    {
        "id": 3,
        "name": "Kapishan",
        "role": "Batsman",
        "image": "kapi.jpeg"
    },
    {
        "id": 4,
        "name": "Anosikan",
        "role": "batsman & fast bowler",
        "image": "aji.jpeg"
    }
]

# test-start


@app.get("/")
def return_message():
    return "TVK API is running successfully"
# test-end


@app.get("/players")
def return_player_info():
    return players


@app.post("/players")
def pos_players(player: Player):
    players.append(player)


"""
Receive player_id from the URL.
Loop through players.
Find the player whose "id" matches player_id.
Return that player

"""


@app.get("/players/{player_id}")
def find_player(player_id: int):

    for player in players:

        if player["id"] == player_id:
            return player

    raise HTTPException(status_code=404, detail="Player was not found")


# The URL path
# The StaticFiles(...) object
# Whether to treat the folder as containing
app.mount(
    "/TVK_API",
    StaticFiles(
        directory="../",
        html=True
    ),
    name="web of TVK"
)


"""
ids=[]


for player in players:
    ids.append(max(player["id"]))


new_id = max(ids) + 1
ids.append(new_id)
"""

# ------contact-----


class Contact(BaseModel):
    name: str
    email: str
    age: int
    address: str
    desc: str


forms = [
    {"name": "Sayan",
     "email": "sayan12@gmail.com",
     "age": 17,
     "address": "no-78,Vidyananda road,Mulliyawali",
     "desc": ""
     }




]


@app.get("/contact-forms")
def get_contact_forms():
    return forms


@app.post("/contact-forms")
def post_contact_forms(form: Contact):
    forms.append(form)


# -------matches--------

class Match(BaseModel):
    match_teamA: str
    match_teamB: str
    winner: str
    avenue: str
    match_time: str
    toss_time: str
    date: str
    teamA_captain: str
    teamB_captain: str
    sponsor: str


matches = [
    {"match_teamA": "Team Daniels",
     "match_teamB": "Team Maddy",
     "winner": "",
     "avenue": "TVK centre",
     "match_time": "3.30pm to 6.30pm",
     "toss_time": "3.20pm",
     "date": "date-20/08/2026",
     "teamA_captain": "Thuvakaran",
     "teamB_captain": "Kenu",
     "sponsor": "J.Anosikan"
     }

]


@app.get("/matches")
def get_matches():
    return matches


@app.post("/matches")
def post_matches(match: Match):
    matches.append(match)
