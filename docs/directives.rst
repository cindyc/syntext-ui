What are directives:
====================
Directives are instructions embedded in text that are used to organize the text or
turn text into structured data.


Syntax:
======
[Entity] or Entity:
------------------------------------------------
Internally they are types
There are templates for each type, so that input can either be text "parsable" format or
by submitting a form.
Examples:
        [task] Packing for the NYC trip
        [website] http://www.metmuseum.org
        [book] The History of Wall Street
        [list] Shopping list for NYC trip
        [place] 1000 5th Avenue, New York, NY 10028 (The Met)
        [event] Visit the Metropolitan Museum
        [album] photos from Metropolitan Museum
        [data] Miles traveled today

@Subject
---------
Subjects are like containers, they can be presented as notebooks, topics or lists
On UI, texts under a subject are presented as sections under a subject page
Subjects can contain entities, sub-subjects, and related subjects
Entities can be turned into subjects
Examples:
        @NYCTrip
        @Readings
        @Syntactic.io
        @MarathonTraining
A section in the text body can be tagged as a sub-subject.

#Tag
----
To mark related subjects or entities
Examples:
        #trip
        #new york
        #nyc
        #met

!Actions
--------
There can be actions against an entity or subject
Like auto-pulling twitter feeds
Example:
        !filter
        !sum
        !email
        !add
