#for c in 'INIAD':
    #print(c)

#s= "INIAD"
#print(s[3])

#def abbrev :
#words = ["Nippon", "Housou", "Kyoukai"]
#for words in
#print(words[1])

#def abbrev(words):
    #result = ''
    #for w in words:
        #result += w[0]
    #return result

#print(abbrev(['Nippon', 'Housou', 'Kyoukai']))
#print(abbrev(['British', 'Broadcasting', 'Company']))

#print('iniad'.find('i'))

#print('iniad'.upper())


#while True:
 #   email = input('E-mailアドレス: ')
  #     break
   # print('再入力してください。')
#
#print('あなたのe-mailアドレスは', email, 'です')

#for c in 'INIAD':
 #   print(c)

#print("")

def message(name, venue, id):
    msg = """{0} さま
あなたの受験番号・受験会場は以下の通りです：

        ・受験番号: {2}
        ・受験会場: {1}

4月1日 13:00に間に合うよう、余裕をもって会場にお越しください。 """
    return msg.format(name, venue, id)

print(message('東洋 太郎', '4201教室', '00001'))
