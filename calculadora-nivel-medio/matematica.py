#  IMPORTAÇÃO DE BIBLIOTECA

import math

#  INTERAÇÃO COM O USUÁRIO PARA ESCOLHA DE OPERAÇÕES

#  OPÇÕES
opções = ('1 - Teorema de Pitágoras\n'
          '2 - SENO, COSSENO E TANGENTE\n'
          '3 - Raíz quadrada\n'
          '4 - Desconto salarial em porcentagem\n'
          '5 - Aumento salarial em porcentagem')
print(opções)
escolha = int(input('Escolha uma operação : '))

while escolha < 6:
    if escolha == 1:
        # ENTRADA DE DADOS

        #  TEOREMA DE PITÁGORAS

        cato = float(input('Cateto oposto : '))
        cata = float(input('Cateto adjacente : '))

        #  PROCESSAMENTO DE DADOS

        hipotenusa = math.hypot(cato, cata)

        #  SAÍDA DE DADOS

        #  TEOREMA DE PITÁGORAS

        print('A soma dos quadrados dos catetos é igual a {:.2f} (hipotenusa)'.format(hipotenusa))
        print(opções)
        escolha = int(input('Escolha uma operação : '))
        continue
    elif escolha == 2:

        # ENTRADA DE DADOS

        #  SENO, COSSENO E TANGENTE

        angulo = int(input('Ângulo : '))

        #  PROCESSAMENTO DE DADOS

        sen = math.sin(math.radians(angulo))
        cos = math.cos(math.radians(angulo))
        tan = math.tan(math.radians(angulo))

        #  SAÍDA DE DADOS

        #  SENO, COSSENO E TANGENTE

        print('O ângulo {} tem o seu SENO no valor : {:.2f}'.format(angulo, sen))
        print('O ângulo {} tem o seu COSSENO no valor : {:.2f}'.format(angulo, cos))
        print('O ângulo {} tem a sua TANGENTE no valor : {:.2f}'.format(angulo, tan))
        print(opções)
        escolha = int(input('Escolha uma operação : '))
        continue
    elif escolha == 3:

        #  ENTRADA DE DADOS

        #  RAÍZ QUADRADA

        num = float(input('Valor : '))

        #  PROCESSAMENTO DE DADOS

        raiz = math.sqrt(num)

        #  SAÍDA DE DADOS

        print('A raíz quadrada de {} é {:.2f}'.format(num, raiz))
        print(opções)
        escolha = int(input('Escolha uma operação : '))
        continue
    elif escolha == 4:
        #  DESCONTO SALARIAL EM PORCENTAGEM

        #  ENTRADA DE DADOS

        desconto_salario = int(input('Porcentagem de desconto : '))

        print('O desconto é de {}%!'.format(desconto_salario))

        op = float(input('Valor a ser descontado os {}% R$ '.format(desconto_salario)))
        desconto = op - (op * desconto_salario / 100)

        #  SAÍDA DE DADOS

        print(f'O seu valor de R${op}, com o desconto de {desconto_salario}% o valor muda para R${desconto:.2f}')
        print(opções)
        escolha = int(input('Escolha uma operação : '))
    elif escolha == 5:
        #  AUMENTO SALARIAL EM PORCENTAGEM

        #  ENTRADA DE DADOS

        salario = float(input('Salário R$ '))
        porcentagem = float(input('Porcentagem de aumento % : '))
        aumento = salario + (salario * porcentagem / 100)

        #  SAÍDA DE DADOS

        print('O salário do funcionário era R$ {:.0f}, com o aumento de {:.0f}% o valor aumenta para R$ {:.0f}'.format(
            salario,
            porcentagem,
            aumento))
        print(opções)
        escolha = int(input('Escolha uma operação : '))
        continue
