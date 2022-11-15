#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define DELAY 50

// Orientações possíveis
#define NORTE 1
#define DIREITA 2
#define SUL 3
#define ESQUERDA 4

// Movimentos
#define F 0
#define T 1
#define GD 2
#define GE 3

struct aspirador {
  int x;
  int y;
  int orientation;
};

void invalidMove();

int main(int argc, char *argv[]) {

  if (argc != 4) {
    printf("Numero de argumentos incorreto. Utilize: \n");
    printf("<./app X Y Z> Sendo X a largura da sala, Y o comprimento e Z a sequência de movimentos do robô (F, T, E, D).\n");
    exit(1);
  }

  int largura = atoi(argv[1]);
  int comprimento = atoi(argv[2]);
  char *sequencia = argv[3];
  int qtd_movimentos = strlen(sequencia);
  int **ambiente = malloc(largura * sizeof(void *));

  int movimentos_invalidos = 0;

  for (int i = 0; i < largura; i++) {
    ambiente[i] = malloc(comprimento * sizeof(int));
    for (int j = 0; j < comprimento; j++) {
      ambiente[i][j] = 0;
    }
  }

  /* O aspirador começa na coordenada <0, 0> virado para o norte.
   * Internamente, o aspirador é representado por um inteiro numa matriz.
   * O valor desse inteiro nos representa a orientação atual dele. */

  struct aspirador aspirador;
  aspirador.x = 0;
  aspirador.y = 0;
  aspirador.orientation = NORTE;

  ambiente[0][0] = aspirador.orientation;

  for (int i = 0; i < qtd_movimentos; i++) {
    switch (sequencia[i]) {
    case 'F':
      switch (aspirador.orientation) {
      case NORTE:
        if (aspirador.y + 1 < comprimento) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.y = aspirador.y + 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;

      case SUL:
        if (aspirador.y - 1 >= 0) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.y = aspirador.y - 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;

      case DIREITA:
        if (aspirador.x + 1 < largura) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.x = aspirador.x + 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;

      case ESQUERDA:
        if (aspirador.x - 1 >= 0) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.x = aspirador.x - 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;
      }
      break;

    case 'T':
      switch (aspirador.orientation) {
      case NORTE:
        if (aspirador.y - 1 >= 0) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.y = aspirador.y - 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;

      case SUL:
        if (aspirador.y + 1 < comprimento) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.y = aspirador.y + 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;

      case DIREITA:
        if (aspirador.x - 1 >= 0) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.x = aspirador.x - 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;

      case ESQUERDA:
        if (aspirador.x + 1 < largura) {
          ambiente[aspirador.x][aspirador.y] = 0;
          aspirador.x = aspirador.x + 1;
          ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
        } else
          invalidMove(&movimentos_invalidos);
        break;
      }
      break;

    case 'E':
      // -1 na orientação = Giro a esquerda
      if (aspirador.orientation == NORTE)
        aspirador.orientation = ESQUERDA;
      else {
        aspirador.orientation--;
      }
      ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
      break;

    case 'D':
      // +1 na orientação = Giro à direita
      if (aspirador.orientation == ESQUERDA)
        aspirador.orientation = NORTE;
      else {
        aspirador.orientation++;
      }
      ambiente[aspirador.x][aspirador.y] = aspirador.orientation;
      break;

    default:
      printf("\nOs movimentos passados não são válidos. Tente novamente utilizando uma sequência de F, T, E e D.");
      exit(1);
    }
    system("clear");
  }

  switch (aspirador.orientation) {
  case NORTE:
    printf("N");
    break;
  case SUL:
    printf("S");
    break;
  case DIREITA:
    printf("L");
    break;
  case ESQUERDA:
    printf("O");
    break;
  }

  printf(" %d %d\n", aspirador.x, aspirador.y);
  //printf(" Movimentos inválidos (tentaram passar a parede) = %d", movimentos_invalidos);
  return 0;
}

void invalidMove(int *invalidos){ 
  *invalidos = *invalidos + 1; 
}
