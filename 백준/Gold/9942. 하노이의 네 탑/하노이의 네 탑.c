#include <stdio.h>

unsigned long long pow(int n);

int main()
{
	int n = 0;;
	int std = 0, cnt = 0;
	unsigned long long sum = 0;

	for (int i = 1;; i++) {
		
		if (scanf("%d", &n) == EOF)
			break;
		printf("Case %d: ", i);

		for (std = 1; std * (std + 1) / 2 < n; std++)
			continue;

		std--;
		cnt = n - std * (std + 1) / 2;
		for (int j = 0; j < std; j++) {
			sum = sum + pow(j) * (j + 1);
		}

		sum += pow(std) * cnt;
		printf("%llu\n", sum);
		sum = 0;
	}
}

unsigned long long pow(int n)
{
	unsigned long long result = 1;
	for (int i = 0; i < n; i++) {
		result *= 2;
	}

	return result;
}