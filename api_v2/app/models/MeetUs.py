from pydantic import BaseModel

class MeetUs(BaseModel):
    title: str
    content: str
    display_order: int
