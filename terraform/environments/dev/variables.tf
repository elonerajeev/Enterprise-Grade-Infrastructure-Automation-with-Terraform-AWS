variable "ami_id" {
  default = "ami-0f918f7e67a3323f0" # Ubuntu 22.04 (Mumbai)
}

variable "dockerhub_username" {
  default = "elonerajeev"
}

variable "dockerhub_password" {
  default = "H.crajeev@62"
}

variable "vpc_id" {
  type = string
}

variable "key_name" {
  default = "infraAppKey1"
}
