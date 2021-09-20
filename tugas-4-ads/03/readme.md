```
STORE "kalimat" with String value
STORE "sambung" = value from kalimat split string to array
THEN JOIN 

STORE "balik" with sambung 
THEN Split to array
REVERSE JOIN
IF boolean "kalimat" equals "balik" THEN "TRUE"
ELSE "False"
```
