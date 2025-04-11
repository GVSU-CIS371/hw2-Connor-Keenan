export interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

export interface CreamerType {
  id: string;
  name: string;
  color: string;
}

export interface SyrupType {
  id: string;
  name: string;
  color: string;
}

export interface BeverageType {
  id: string;
  name: string;
  temp: string;
  base: BaseBeverageType;
  syrup: SyrupType;
  creamer: CreamerType;
}