import os
import re
import PyPDF2
import glob

def find_employee_info(file_path):
    with open(file_path, 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfFileReader(pdf_file)
        for page in range(pdf_reader.getNumPages()):
            page_obj = pdf_reader.getPage(page)
            text = page_obj.extractText()

            # Encontra o número do funcionário e nome
            match = re.search(r'(\d{6})\s+([\w\s]+)', text)
            if match:
                employee_number = match.group(1)
                employee_name = match.group(2)
                return employee_number, employee_name

    # Retorna None se não encontrar a informação do funcionário
    return None

# Pasta onde estão os arquivos
folder_path = './'

# Percorre todos os arquivos na pasta
for filename in os.listdir(folder_path):
    # Verifica se é um arquivo PDF
    if filename.endswith('.pdf'):
        # Caminho completo para o arquivo
        file_path = os.path.join(folder_path, filename)
        employee_info = find_employee_info(file_path)
        if employee_info:
            print(f'Arquivo: {filename}')
            print(f'Número do funcionário: {employee_info[0]}')
            print(f'Nome do funcionário: {employee_info[1]}')

            # Renomeia o arquivo com o número e nome do funcionário
            new_filename = f'{employee_info[0]} {employee_info[1]}.pdf'
            os.rename(file_path, os.path.join(folder_path, new_filename))
            print(f'Arquivo renomeado para {new_filename}.')
        else:
            print(f'Não foi possível encontrar o número e o nome do funcionário no arquivo {filename}!')
