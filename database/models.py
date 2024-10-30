# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 30, 2024 14:53:18
# Database: sqlite:////tmp/tmp.IGBmRneDa5/Cattle_Town_1/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class AmusementPark(SAFRSBaseX, Base):
    """
    description: Contains information about the amusement park.
    """
    __tablename__ = 'amusement_park'
    _s_collection_name = 'AmusementPark'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CattleRideList : Mapped[List["CattleRide"]] = relationship(back_populates="park")
    FoodStallList : Mapped[List["FoodStall"]] = relationship(back_populates="park")
    GamblingAttractionList : Mapped[List["GamblingAttraction"]] = relationship(back_populates="park")
    RideList : Mapped[List["Ride"]] = relationship(back_populates="park")
    StaffList : Mapped[List["Staff"]] = relationship(back_populates="park")



class Cow(SAFRSBaseX, Base):
    """
    description: Includes each cow with a unique name.
    """
    __tablename__ = 'cow'
    _s_collection_name = 'Cow'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False, unique=True)
    breed = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    MedicalTreatmentList : Mapped[List["MedicalTreatment"]] = relationship(back_populates="cow")
    CowRideParticipationList : Mapped[List["CowRideParticipation"]] = relationship(back_populates="cow")



class ParkVisitor(SAFRSBaseX, Base):
    """
    description: Information about visitors to the park.
    """
    __tablename__ = 'park_visitor'
    _s_collection_name = 'ParkVisitor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    visit_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    PurchaseList : Mapped[List["Purchase"]] = relationship(back_populates="visitor")
    TicketList : Mapped[List["Ticket"]] = relationship(back_populates="visitor")



class CattleRide(SAFRSBaseX, Base):
    """
    description: Specific rides on real cows.
    """
    __tablename__ = 'cattle_ride'
    _s_collection_name = 'CattleRide'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    park_id = Column(ForeignKey('amusement_park.id'), nullable=False)
    difficulty_level = Column(String)

    # parent relationships (access parent)
    park : Mapped["AmusementPark"] = relationship(back_populates=("CattleRideList"))

    # child relationships (access children)
    CowRideParticipationList : Mapped[List["CowRideParticipation"]] = relationship(back_populates="cattle_ride")
    TicketList : Mapped[List["Ticket"]] = relationship(back_populates="cattle_ride")



class FoodStall(SAFRSBaseX, Base):
    """
    description: Details about food stalls operating within the park.
    """
    __tablename__ = 'food_stall'
    _s_collection_name = 'FoodStall'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    park_id = Column(ForeignKey('amusement_park.id'), nullable=False)
    cuisine_type = Column(String)

    # parent relationships (access parent)
    park : Mapped["AmusementPark"] = relationship(back_populates=("FoodStallList"))

    # child relationships (access children)
    TicketList : Mapped[List["Ticket"]] = relationship(back_populates="food_stall")



class GamblingAttraction(SAFRSBaseX, Base):
    """
    description: Information on gambling attractions.
    """
    __tablename__ = 'gambling_attraction'
    _s_collection_name = 'GamblingAttraction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    park_id = Column(ForeignKey('amusement_park.id'), nullable=False)
    min_age = Column(Integer, nullable=False)

    # parent relationships (access parent)
    park : Mapped["AmusementPark"] = relationship(back_populates=("GamblingAttractionList"))

    # child relationships (access children)



class MedicalTreatment(SAFRSBaseX, Base):
    """
    description: Details on past medical treatments provided to any cow.
    """
    __tablename__ = 'medical_treatment'
    _s_collection_name = 'MedicalTreatment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    cow_id = Column(ForeignKey('cow.id'), nullable=False)
    treatment_date = Column(DateTime)
    description = Column(String, nullable=False)

    # parent relationships (access parent)
    cow : Mapped["Cow"] = relationship(back_populates=("MedicalTreatmentList"))

    # child relationships (access children)



class Purchase(SAFRSBaseX, Base):
    """
    description: Record of purchases made within the park including rides and food.
    """
    __tablename__ = 'purchase'
    _s_collection_name = 'Purchase'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    visitor_id = Column(ForeignKey('park_visitor.id'), nullable=False)
    total_amount = Column(Float, nullable=False)
    purchase_date = Column(DateTime)

    # parent relationships (access parent)
    visitor : Mapped["ParkVisitor"] = relationship(back_populates=("PurchaseList"))

    # child relationships (access children)



class Ride(SAFRSBaseX, Base):
    """
    description: Includes details about the various rides available in the park.
    """
    __tablename__ = 'ride'
    _s_collection_name = 'Ride'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    park_id = Column(ForeignKey('amusement_park.id'), nullable=False)
    type = Column(String)
    description = Column(String)

    # parent relationships (access parent)
    park : Mapped["AmusementPark"] = relationship(back_populates=("RideList"))

    # child relationships (access children)
    TicketList : Mapped[List["Ticket"]] = relationship(back_populates="ride")



class Staff(SAFRSBaseX, Base):
    """
    description: Details about the employees working in the park.
    """
    __tablename__ = 'staff'
    _s_collection_name = 'Staff'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    role = Column(String)
    park_id = Column(ForeignKey('amusement_park.id'), nullable=False)

    # parent relationships (access parent)
    park : Mapped["AmusementPark"] = relationship(back_populates=("StaffList"))

    # child relationships (access children)



class CowRideParticipation(SAFRSBaseX, Base):
    """
    description: Links cows and cattle rides indicating which cows participate in which rides.
    """
    __tablename__ = 'cow_ride_participation'
    _s_collection_name = 'CowRideParticipation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    cow_id = Column(ForeignKey('cow.id'), nullable=False)
    cattle_ride_id = Column(ForeignKey('cattle_ride.id'), nullable=False)

    # parent relationships (access parent)
    cattle_ride : Mapped["CattleRide"] = relationship(back_populates=("CowRideParticipationList"))
    cow : Mapped["Cow"] = relationship(back_populates=("CowRideParticipationList"))

    # child relationships (access children)



class Ticket(SAFRSBaseX, Base):
    """
    description: Tickets issued for rides, food, gambling, and cattle rides.
    """
    __tablename__ = 'ticket'
    _s_collection_name = 'Ticket'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    visitor_id = Column(ForeignKey('park_visitor.id'), nullable=False)
    ride_id = Column(ForeignKey('ride.id'))
    food_stall_id = Column(ForeignKey('food_stall.id'))
    cattle_ride_id = Column(ForeignKey('cattle_ride.id'))
    purchase_datetime = Column(DateTime)

    # parent relationships (access parent)
    cattle_ride : Mapped["CattleRide"] = relationship(back_populates=("TicketList"))
    food_stall : Mapped["FoodStall"] = relationship(back_populates=("TicketList"))
    ride : Mapped["Ride"] = relationship(back_populates=("TicketList"))
    visitor : Mapped["ParkVisitor"] = relationship(back_populates=("TicketList"))

    # child relationships (access children)
