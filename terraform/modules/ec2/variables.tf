variable "ami_id" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "subnet_id" {
  type = string
}

variable "dockerhub_username" {
  type = string
}

variable "dockerhub_password" {
  type      = string
  sensitive = true
}

variable "vpc_id" {
  type = string
}

variable "key_name" {
  type        = string
  description = "infraAppKey(Private Key .pem file)"
}
