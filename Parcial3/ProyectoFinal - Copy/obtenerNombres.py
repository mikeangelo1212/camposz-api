import os

#este es un script para sacar automaticamente las imagenes de mi carpeta

FOLDER_PATH=r'C:\xampp\htdocs\camposz-api\Parcial3\ProyectoFinal\Garfield-Comic-Strips'

def sacarCarpetas(direccion):#nuestra carpeta de imagenes del garfield tiene dos "niveles"
    fileNames=os.listdir(direccion) #entonces haremos dos ciclos para acceder a todas las imagenes
    lista=[]                        #y entrar a las carpetas dentro de las carpetas
    carpetas=[]
    for fileName in fileNames:
        lista.append(os.path.abspath(os.path.join(direccion,fileName)))
    for carpeta in lista:
        fileNames=os.listdir(carpeta)
        for fileName in fileNames:
            carpetas.append(os.path.abspath(os.path.join(carpeta,fileName)))
    return carpetas
        
def listDir(carpetas):
    file=open(r'C:\xampp\htdocs\camposz-api\Parcial3\ProyectoFinal\direcciones.txt','w')
    for carpeta in carpetas:
        fileNames=os.listdir(carpeta)
        for fileName in fileNames:
            file.write(f'insert into imagenes(direccion) values("{os.path.abspath(os.path.join(carpeta,fileName))}");\n')
    file.close()

if __name__ =='__main__':
    listDir(sacarCarpetas(FOLDER_PATH))
    