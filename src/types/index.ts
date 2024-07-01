export interface ServerCompProps<
  P = Record<string, string>,
  S = Record<string, string | string[]>
> {
  params: P;
  searchParams: S;
}

export interface ADSData {
  title: string;
  img: string;
  link: string;
  description: string;
}
