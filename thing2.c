#include <stdio.h>

#define MAXLINE 1000

int grabline(char line[], int maxline);
void detab(char line[], char nline[],int tabstops[]);

/* A program which folds all lines so they do not extend
past a defined column number n (this will be a command
arg eventually */

main()
{
  int len,i;
  int tabstop = 4;
  char line[MAXLINE];
  int notabMAXLINE = tabstop*MAXLINE;
  int tabstops[notabMAXLINE];
  char nline[notabMAXLINE];
 
  for(i=0; i<=notabMAXLINE; ++i)
    tabstops[i] = (tabstop - i%tabstop);

  while ( (len = grabline(line,MAXLINE)) > 0 ) {
    detab(line,nline,tabstops);
    printf("%s",nline);
  }
}

/* grabline: read a line into s, return length */
int grabline(char s[], int lim)
{
  int c, i;

  for(i=0; i<lim-1 && (c=getchar())!=EOF && c!='\n'; ++i)
    s[i] = c;
  if (c == '\n') {
    s[i] = c;
    ++i;
  }
  s[i] = '\0';
  return i;
}

void detab(char line[], char nline[],int tabstops[])
{
  int i,j,k;
  k = 0;

  for (i=0; line[i]!='\0'; ++i)
    if (line[i] == '\t')
      for (j=0; j<tabstops[i]; ++j)
	nline[k++] = ' ';
    else 
      nline[k++] = line[i];
  nline[k] = '\0';
}
#include <stdio.h>

#define MAXLINE 1000
