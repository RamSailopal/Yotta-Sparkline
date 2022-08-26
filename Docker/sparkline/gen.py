import time
import datetime
import random
import yottadb
while 1:
    now = datetime.datetime.now()
    reading=random.uniform(36.5,37.5)
    dayte=now.strftime("%Y%m%d%H%M%S")
    yottadb.set("^VITALS", ("temp", dayte), str("{:.2f}".format(reading)))
    now = datetime.datetime.now()
    reading=random.uniform(80,120)
    dayte=now.strftime("%Y%m%d%H%M%S")
    yottadb.set("^VITALS", ("pulse", dayte), str("{:.0f}".format(reading)))
    now = datetime.datetime.now()
    reading=random.uniform(16,20)
    dayte=now.strftime("%Y%m%d%H%M%S")
    yottadb.set("^VITALS", ("resp", dayte), str("{:.0f}".format(reading)))
    time.sleep(5)

