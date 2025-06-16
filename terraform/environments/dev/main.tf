provider "aws" {
  region = "ap-south-1"
}

module "vpc" {
  source = "../../modules/vpc"

  cidr_block            = "10.0.0.0/16"
  public_subnet_1_cidr  = "10.0.1.0/24"
  public_subnet_2_cidr  = "10.0.2.0/24"
}


module "iam" {
  source = "../../modules/iam"
}

module "ec2" {
  source              = "../../modules/ec2"
  ami_id              = "ami-0f918f7e67a3323f0"
  instance_type       = "t2.micro"
  subnet_id           = module.vpc.public_subnets[0]  # subnet 1
  vpc_id              = module.vpc.vpc_id             # ✅ required for SG
  dockerhub_username  = "elonerajeev"
  dockerhub_password  = var.dockerhub_password
  key_name            = var.key_name
}



module "alb" {
  source     = "../../modules/alb"
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.public_subnets
}

