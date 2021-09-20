```
STORE "Besar_temperatur" without any value 
STORE  "Tipe_temperatur" without any value 

IF Tipe_temperatur is "celcius" THEN 
DISPLAY "Besar_temperatur"

ELSE IF Tipe_temperatur is "fahrenheit" THEN
SET result =(Besar_temperatur - 32) * (5/9) THEN
DISPLAY result

ELSE IF Tipe_temperatur is "kelvin" THEN
SET result =(Besar_ temperatur - 273.15) THEN
DISPLAY result

ENDIF
```
