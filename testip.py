import ipaddress


def ProcessIp(ip,subnet):
        """
        ***IP address processing here**
        
        """
        """
        Convert the received prefix
        to a ipaddress() network object 
        """
        ipn = ipaddress.ip_network(ip+'/'+subnet, strict=False)
        """
        Get the wildcardmask
        """
        wild_card_mask= ipn.hostmask
        """
        Get the subnet ID
        """
        subnetid = ipn.network_address
        """
        Get the broadcast address
        """
        broadcast_address  = ipn.broadcast_address
        
        """
        Get the Hex Format
        of the IP address 
        """
        prefix_split = str(ip).split('.')
        fullhex = "".join([hex(int(value))[2:].zfill(2) for value in prefix_split])
        dottedhex = (fullhex[0:2])+'.'+(fullhex[2:4])+'.'+(fullhex[4:6])+'.'+(fullhex[6:8])
        return wild_card_mask,subnetid,broadcast_address,dottedhex


print(ProcessIp('192.168.1.1','24'))