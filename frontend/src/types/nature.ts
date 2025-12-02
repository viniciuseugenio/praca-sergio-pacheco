export interface NatureElement {
  id: number;
  name: string;
  scientific_name: string;
  description: string;
  type: string;
  image_url: string;
}

export interface CreateNatureElementDto {
  name: string;
  scientific_name: string;
  description: string;
  type: string;
  image: File;
}

export interface UpdateNatureElementDto {
  name?: string;
  scientific_name?: string;
  description?: string;
  type?: string;
  image?: File;
}
