# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
import datetime

Base = declarative_base()

class AmusementPark(Base):
    """description: Contains information about the amusement park."""
    __tablename__ = 'amusement_park'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)


class Ride(Base):
    """description: Includes details about the various rides available in the park."""
    __tablename__ = 'ride'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    park_id = Column(Integer, ForeignKey('amusement_park.id'), nullable=False)
    type = Column(String, nullable=True)
    description = Column(String, nullable=True)


class FoodStall(Base):
    """description: Details about food stalls operating within the park."""
    __tablename__ = 'food_stall'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    park_id = Column(Integer, ForeignKey('amusement_park.id'), nullable=False)
    cuisine_type = Column(String, nullable=True)


class GamblingAttraction(Base):
    """description: Information on gambling attractions."""
    __tablename__ = 'gambling_attraction'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    park_id = Column(Integer, ForeignKey('amusement_park.id'), nullable=False)
    min_age = Column(Integer, nullable=False, default=18)


class CattleRide(Base):
    """description: Specific rides on real cows."""
    __tablename__ = 'cattle_ride'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    park_id = Column(Integer, ForeignKey('amusement_park.id'), nullable=False)
    difficulty_level = Column(String, nullable=True)


class Cow(Base):
    """description: Includes each cow with a unique name."""
    __tablename__ = 'cow'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False, unique=True)
    breed = Column(String, nullable=True)


class MedicalTreatment(Base):
    """description: Details on past medical treatments provided to any cow."""
    __tablename__ = 'medical_treatment'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    cow_id = Column(Integer, ForeignKey('cow.id'), nullable=False)
    treatment_date = Column(DateTime, default=datetime.datetime.utcnow)
    description = Column(String, nullable=False)


class CowRideParticipation(Base):
    """description: Links cows and cattle rides indicating which cows participate in which rides."""
    __tablename__ = 'cow_ride_participation'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    cow_id = Column(Integer, ForeignKey('cow.id'), nullable=False)
    cattle_ride_id = Column(Integer, ForeignKey('cattle_ride.id'), nullable=False)


class ParkVisitor(Base):
    """description: Information about visitors to the park."""
    __tablename__ = 'park_visitor'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    visit_date = Column(DateTime, default=datetime.datetime.utcnow)


class Ticket(Base):
    """description: Tickets issued for rides, food, gambling, and cattle rides."""
    __tablename__ = 'ticket'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    visitor_id = Column(Integer, ForeignKey('park_visitor.id'), nullable=False)
    ride_id = Column(Integer, ForeignKey('ride.id'), nullable=True)
    food_stall_id = Column(Integer, ForeignKey('food_stall.id'), nullable=True)
    cattle_ride_id = Column(Integer, ForeignKey('cattle_ride.id'), nullable=True)
    purchase_datetime = Column(DateTime, default=datetime.datetime.utcnow)


class Purchase(Base):
    """description: Record of purchases made within the park including rides and food."""
    __tablename__ = 'purchase'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    visitor_id = Column(Integer, ForeignKey('park_visitor.id'), nullable=False)
    total_amount = Column(Float, nullable=False)
    purchase_date = Column(DateTime, default=datetime.datetime.utcnow)


class Staff(Base):
    """description: Details about the employees working in the park."""
    __tablename__ = 'staff'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    role = Column(String, nullable=True)
    park_id = Column(Integer, ForeignKey('amusement_park.id'), nullable=False)

# Initialize the database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session for inserting data
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data for each class
park = AmusementPark(name="Cow World", location="Farmville")
session.add(park)

ride = Ride(name="Twister", park_id=1, type="Thrill", description="A high-speed spin ride.")
session.add(ride)

food_stall = FoodStall(name="Burger Barn", park_id=1, cuisine_type="American")
session.add(food_stall)

gambling_attraction = GamblingAttraction(name="Cattle Casino", park_id=1, min_age=21)
session.add(gambling_attraction)

cattle_ride = CattleRide(name="Cowboy Adventure", park_id=1, difficulty_level="Intermediate")
session.add(cattle_ride)

cow = Cow(name="Bessie", breed="Holstein")
session.add(cow)

medical_treatment = MedicalTreatment(cow_id=1, treatment_date=datetime.datetime(2023, 5, 12), description="Vaccination")
session.add(medical_treatment)

cow_ride_participation = CowRideParticipation(cow_id=1, cattle_ride_id=1)
session.add(cow_ride_participation)

visitor = ParkVisitor(first_name="John", last_name="Doe", visit_date=datetime.datetime(2023, 9, 15))
session.add(visitor)

ticket = Ticket(visitor_id=1, ride_id=1, purchase_datetime=datetime.datetime(2023, 9, 15))
session.add(ticket)

purchase = Purchase(visitor_id=1, total_amount=75.00, purchase_date=datetime.datetime(2023, 9, 15))
session.add(purchase)

staff = Staff(first_name="Alice", last_name="Smith", role="Manager", park_id=1)
session.add(staff)

# Commit the transaction
session.commit()

# Close the session
session.close()
