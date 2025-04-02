Bloque:
- Hay 2 etapas: clasif y final
- 1era etapa (clasif): Todos los deportistas inscritos participan en 4 bloques
    - De los 4 bloques cada bloque tiene una zona (Indica si se llegó a la mitad del bloque, da un punto) y un top (Indica que se completó la pared)
    - El registro se realiza ingresando los intentos (cada uno de los 4 bloques), si realiza el top al 1er intento se registra 1 y 1, y dependendiendo de, el input viene a ser en qué intento se llegó a la zona y al top, si no llegó se pone un 0, puede ser que solo llego a la zona, se le pone 0 en top y el intento en que llegó a la zona
    - Como resultado se debe visualizar el número de tops que hizo en los intentos que hizo, el número de zonas que hizo, con el número de intentos
    - Como máximo se tiene 15 intentos para completar los 4 bloques (No hay límite)
    10000 -(#intentos_zona*200) - (#intentos_top*10)
    
        Dep1: bloque 1 top al 1 y zona al 1: 10000 -(1*20) -(1*10) = 9980 
        Dep2: bloque 1 top al 2 y zona al 1: 10000 -(2*20) -(1*10) = 9970 

    - Pasan a la final los 6 mejores puntajes, si hay empata entre 6 y 7 pasan los 7
    - Si hay empate se ve quién clasificó mejor

Dificultad:
- Hay 2 etapas: clasif y final
- En la primera etapa todos los incritos participan en 2 rutas
- En las 2 rutas se registra el número de presa (el número de agarre) al que llegaron
- Para sacar el ranking se multiplica el puesto en el que se encuentran de las 2 rutas y se saca la raiz cuadrada
- El que tenga el puntaje más bajo queda primero
- QP = √ (P1 * P2)
    where:
    QP = Qualification Points, rounded to three (3) decimal places.
    P1 = Ranking points on first route.
    P2 = Ranking points on second route.
    the ranking of competitors within their Starting Group will be calculated in ascending order
    of the Qualification Points awarded to each competitor (i.e. lower Qualification Points is
    better) according to the following formula
- A la final pasan los 8 mejores de la clasificacion
- Si hay empates entre el 8vo y 9no pasan los 9
- Para la final se evalúa quién llega al agarre más alto
- Si hay empate se ve quién clasificó mejor

Combinada:
- Solo existe una etapa de final
- Se registran 8 deportistas
- Se comienza con modalidad bloque 4 bloques y cada bloque vale 25 puntos y cada bloque tiene 2 zonas y un top cada uno, entonces el deportista puede llegar a un máximo de 100 puntos
    - La primera zona vale solo 5 puntos
    - La segunda zona vale 10 puntos (si llega a la segunda zona tendrá en total los 10 puntos)
    - Si llega al top tendrá los 25 puntos
    - Por cada intento perderá 0.1 puntos por cada intento a partir del 2do
- La siguiente modalidad es vias
    - Solo dan una ruta que vale 100 puntos
    - Se registrará directamente el puntaje
    - 

------------------------------------------------------------
Velocidad
- En calsificatoria se toma el mejor de los dos tiempos ✅
- Se registra uno por uno los tiempos ✅
- Actualizar los puestos cada vez que se registra un tiempo ✅
- Falta realizar Fall ✅
- Salida en Falso (FLS) -> FLS es descalificado ✅
- Implementar el reporte en pdf  ✅
- Abreviar clasificatorias 

Bloque
- Implementar reporte 
- Empate 

Vias
- Empate 
- Agregar número de presas por ruta antes de registrar resultados ✅
- El número final de presa sea distinto al de top ✅
- Top vale más que la última presa ✅
- Reporte 

Combinada
- Calcular bien puntajes en bloque
- En via que el número de presa sea distinto al top y agregar el número de presas
- Que se sumen los dos puntajes para calcular el ganador
- Reporte

- Reparar crud de competencias
- Reparar todo lo que no funciona
- Dar correctamene los estilos, que todo bien centrado y uniforme

- Validar las autorizaciones
Deportista solo tiene acceso a visualizar competencias y resultados
El reporte en tiempo real de resultados
Juez tiene gestión de la infraestuctura, gestión de competencias, agregar resultados
Entrenador agrega deportistas, pero no puede agregar resultados
Administrador tiene acceso a todo, y es quien crea los participantes (deportista, juez y entrenador)


