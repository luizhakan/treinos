#!/usr/bin/python
# -*- coding: utf-8 -*-

try:
    from PyPDF2 import PdfFileWriter, PdfFileReader
    modulo = True
except ImportError:
    modulo = False

import sys
import os


def main():

    # --- Verifica se o módulo foi instalado ---
    if (not modulo):
        os.system('clear')
        print("Módulo PyPDF2 não instalado.\nAcesse https://pypi.python.org/pypi/PyPDF2/ e instale o módulo para poder usar esse Script Python.")
        sys.exit(1)

    # --- Verifica a quantidade de parâmetros ---
    qtdParametros = len(sys.argv)
    if (qtdParametros < 3):
        print("Uso: python juntarPDF.py arquivo1.pdf arquivo1.pdf ...")
        sys.exit(1)

    # --- Verifica se os arquivos realmente existem ---
    for arquivo in sys.argv:
        if (not os.path.isfile(arquivo)):
            print("Não foi possível encontrar o arquivo \"%s\"." % arquivo)
            sys.exit(1)

    # --- Verifica se o arquivo é realmente um pdf ---
    i = 1
    while i < qtdParametros:
        if (sys.argv[i].split('.')[1].lower() != "pdf"):
            print("O arquivo \"%s\" parece não ser um PDF." % sys.argv[i])
            sys.exit(1)
        i += 1

    # --- Junta os arquivos ---
    output = PdfFileWriter()
    i = 1
    while i < qtdParametros:
        [output.addPage(PdfFileReader(open(sys.argv[i], "rb")).getPage(page_num))
         for page_num in range(PdfFileReader(open(sys.argv[i], "rb")).numPages)]
        i += 1
    output.write(open("juntado.pdf", "wb"))


if __name__ == "__main__":
    main()
