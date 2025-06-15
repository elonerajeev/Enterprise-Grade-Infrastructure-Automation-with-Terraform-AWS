output "ec2_public_ip" {
  value = module.ec2.instance_public_ip
}

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "alb_dns" {
  value = module.alb.alb_dns
}

