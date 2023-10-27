'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('specialties', [
      {
        name: 'Cơ xương khớp',
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSFBcVFRUYFxcYGhcYGxcbGhodGxoXGhcbGxsaHRgbICwkGx0pIBcaJTYlKi4wMzM0GiY5PjkxPSwyMzABCwsLEA4QHhISHjInJCkyMjQwMjI0MjI0MzQyMjIyNDIyNDIyMjIyOzIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALkBEAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECBAYDB//EAEEQAAIBAgMEBwYDBgUEAwAAAAECEQADBBIhBTFBUQYTImFxgZEyQlKhscFi0fAjcoKi4fEHFBWSwiQzU7IWY6P/xAAaAQACAwEBAAAAAAAAAAAAAAAABQECAwQG/8QALREAAgIBBAEDAwMEAwAAAAAAAAECAxEEEiExUQVBYSIygRNxsRTB0fAGkaH/2gAMAwEAAhEDEQA/APOaVKlTkVipUqVACpU4rrh7DXGyopYngP1oKAICkBWm2Z0Va4QGzM3wWxJ8zFaQ9CTatm41lQq6nM2Zo5xrVJXRj2zSNUpdI83ApwK9Ft9HLbjS3a9I+1Ucd0SCicjJ3qcy/f7VENRCXTJlROPaMUBTgURx2x7lrX21+IcPEcKogV0rD6MXwMBTxSireDwFy7JQDKsZnZlVVB3EsxA4Gp67IKkUoq31FsW8xuftDuthGMa+85gDTXTNwrq72AylLdxgD2g7jtabh1agrrrvNSBQilFEFxdsOWGHtFSAAha4QCPeBzgye8xUVxSBWBsWyWLENNwFJ3BYeCBwkHvmjnwH5KEUoq89yyVUdWysCuZw85h70Iy6MfGByp2w9l3At3CikE5ry5Ybgs280zzgUAUIpiKuPgLgDsFzohytcTtIDE+0NI76qEVAECKYiukURw2wrtzUwg/Fv/2j7xVZNLslJsEEUxFau10Uze9cY/hX+9c8T0Wy7nZT+Nf7Vn+rHyX2SMsRTGiWN2Tdtassr8S6jz4irfRpLLM4ZXuXSjolvMiI5eLcZyCQwDs0wICkzQ5LGSFHLwATTVf2pgGtNmyxbcsbbjNkZZ3ozgFl5E7xB41RNHYNYGpUqVBAqVKlQAqVKlQAqQqdq2XMKJOp8gJO/wAKliMM9titxGRhvVlKn0NBJ1wGDa84RfEngBzNel9F+jKlfht8W95yO/lQXo5gEtqguGCxDPz7lH6516Xs1hHZELwP2FL9VqcS2xO7Tabct0ugngMPbtLltqFHIfc8TXe6AwIIkEEEcwdDVRmjcagcRG81xbs9nbGrwY4Th7z2m90yveh1U+mniDRVMTPGuu2tlpiyrB8lxAQDoQQfdbunlzNZ601xHyOjK0xBG/vB4jvrPpm+zK+S9i8Clw9kAP3bj4isbtro0657iKECSXDGBMT2eZPIc69Q2VgQozNqx+VVuk+GR0zbnTd3rxH3ru0+pcGlJ8C/UUKXMVyePm/bt9WbStnXVnuZGBYiIFuCoUHUEyfCq+IvvcYvcYux3sdTpu8B3Vd2zguquaey3aHdzHl96oqs6U7ik1kVPPRGKeKt28C536eP5VZTZw4sT4VOURhguKUUYGATkfU0jgE5H1NRuRO1geKaKKPs5eBI+dV7mAcboPhv9KnKIwyrauMhlGZTBEqSCQd404d1WUurc6u21tQQyr1iL2ym6CkhXO7XQ6amq7IRoRBo90YwGY9Yd5OVe74j9vWq2NRjuZaCcnhBTZPRxbbSGW4f/IAYAPAKdQ3P61psLhETcJPM6n+lM0W0VRVnDbqSW3ym+xxVp1GJFbORpG41J7pjXUd9TdqH4m+SQiiXYhVHMnQViafpsp38C13O9u2AlvR2G6Tugd288gRWO21sYoTctgq6nMVGm7XMsbjxr3PZmBWzaW3vgdo/Ex9o+Zms50g6Ndlrlo+yC2Q743kKePga6abnF4Zx2VprKPOcDi7eNtNbuT1kAs7AGHk/9QXGXIuqhmd4CqFVWkAYwitO123gsQbhtl1dWKZXyFHIIJBgjjykSCNRVHpFaul+tuqgmLZCP1hV0UDJcYszdYFyzJmu2PD46Zyy5XygIaVOaatDIVKlSoAVKlSoALdGyevVciOGVg6uSFNtRneYBPsoeB8KM7ZwrNfwyntW8mZWBQKwnOSLVvs2+y1sQAJ0PGgvR7CdbejO6FVZwyMFbMsBQHOiSSBm/Oi9i0UxrKbxvAIxVzcFxtSoIYgmGBkHwms5fd+DaPR6HsvY4OGS9lBYu0zwScoI8x86MYZSBod3CiGw7YOFtLwNtZ8xQe8CrlDIYfMcI8qT2r6nIa6Z5jtO2JxEChV/GbwTv0pYy5Egme+gmJuGJGtYSkO9PQmjqli2bi5SbbKZOViJG6I3edafClWgFi2UyATMaetZOzYVyGKgkbpo/sO3CkgASWOniaiHZbVwW3OegvicWLY+lCzafEy0wvAc6h0hV0W28jIzZSOInVfWDRDZSSoIqXFuWH0KW0o5Rh+k2yDDBtMjAjwb+49Kzr3Ldka6HkNWNbPp/imti4F0PVgz5nd6V5hh0LGTqTvPOvQUTbrWRLOGbMIIvtF29hYHM6n8qq3HuHUu3Pf9hRnZuzWuEBRJo8nRJveBP4VnXzIn09aFbl4GL9OxXuZ22VjluYYhjLFUOQmIYTqAPa3xHdWU6QOWK2w0wSx8ZIAnuFa9dndXmtkZWKQBlOUDSBOm6BumhX/xq4gAeCDJBWdNdZzAfrjUZipuSZyQ08p4izIo1xNzMPP7Gu9vazr7YDDmND+VaHG7Be2J0I+cc4/KazuMw8VeNuWa6j091x3F+1ibd4Rx+E6MP13VqcFhTaS2FBIA17iddfU15k6wdK9T2FtQdWufWVQg+VZauTVbOfRpO1cHDam08ly2p0Gv2o7gcWrLIM1V2psSzi1DAm249lxqPAqdCPnQvG4v/T1m6uZdwdQcpPI/CaS8pnolGEopLsIbV2iEq30KyMz4q6yqF7CSQNSJYxziB5mgOztlvjAL1yVQ6rbGmnAsfsKP4fBknLat5iN8Dd4nhUxbzkrdGChtT592aTFdIkXRFLnmeyvz1PpQPF4y5enrHMfANF9Bv85qX+l4n/xfzL+ddbWw8Sd4VfFvyBrUWyjFdHnPSzDjqyfgf5Ex9xXPaYt3ML1nVkkIjAvcRXEpkLn9qxuFmCEDImixrV3pmMq3VJBIcLI3Eq+sehoNjdmWlwiXFt3etK2yzSpUZgWJZQxKqygsCQJGX8VNYfbHItl28GdNMakaia2MBqVKlUAKkKVOKADnRI3DfyW/ZZX6zTUJkYEhgylD2soIZdWEmKuXLpGPznQXAAO0jaBAkFkdwSDbg9omRrrNAMDdW3cVmAKz2gUV5U7xlfQmPDxFXtrbTS7cR7VrqhbCqozloVYygCAFAgmBvLEkk61Rxe78Gilwe89FL+fC2+ayh/hJA+UVz6S2OwLi+0hHmpMRWc/w/wBsqTkJ7N0Bl7nGhXz3fw1q+kD9gJ8bAeQ1P2pXfHa2MdPPlNGWxCHKLgIa3768U/F3gcRyqnewnV9oaof5Sd2vwmijYdrZzqJU+0g94d08aHC8LQLEZ8MZB07VsHTI4+HWAfWuOSQ7pveCKYZkZSillJAIG9Se74fpWjwWGyqq7joPAcaGbLw94Ki20VbepN13LMQSYCqRJ0jUkDxrSYGwobQljElj6ADhzq8ImWq1GVgzf+IsrZsgf+SY5wh/On6NY05ACK6/4ggRh15ux9FUfeq+EdbFo3DwGg5sdwqXFufBxKS2cmc/xBxgY3fBLQ8iJ/5ViMHvon0lxRuOEmSCXY/ib9fOqWDwpZgBx4/U+lPqoYgkKIzl+puSNz0WbJkIA1/aMT8C/r1atguLS8C8RHZmAdY490GsPZudXaUbjcAP7tm3ov8AuYE+AFFLG1BZDEZjoXhT2tyyQvvD6VzW0uSco9J4Q2lrItJS7x/4X9l35vOgIyhCeyCBIjVSxJHeKr2FDXCZB3hpBnzMnTyqhsvFEO7spko2gzuV3EyfZEnkNDAnhVG3tM5yI0YESToNDqQ0xx1rGdcnFpfBlTqIxknk0G2Mct22URQGt6mOMb4jxrzzakb+Yn7fatE+MyZXUyZzHkwjKR3iB85oJtnDQ5C6pGdD+Btfka6qKXBpS91k21OrjKvbBdf3M3dXWtBst+tw+X3rcjvjUj5aeVB7tg0+z8WbDht4OjDmPzre6tWQcRJTZKqxS8M2+wOsW2rOd5Mc8s6TWiuJbv2mt3BmtuMrA8O/uI3g91ZBcZcz27ls9ZaYZWQEDLG5x3gSCPCj2GxgCZ1l7fFkh4j4re8jfupDOt1vDPTK6N0d0QjhrRs2wkyBoDz5Vpei90NZgD2WYE8zM/ePKsjZvIynq2UjTRSw/kMx4SK13ReOo0EHM095/tFRDsx1L+j8hqqe08YLFprje6NBzY6AeZiu9++ttSzMFUbyd1eZ9MekwfXUW1nIvFm5kfqBXTVW5sWWTUUZTpB1mIuLatgu/ausBG/z479O8c6l0gxbWLduyGE5CrKA2VrXV5EJZhJMlwMtxlERzFAEx9xLnWo7JcknMpgidIHdGkcq543GXLxDXCCVXKMqqgAkt7KACSWJJjUmmn6fXhHFu78lQ0xqRqJqzKETSpzTVACpxTU4oAkKcUwpxVkAa2BtTqWysYUkEH4G4HuFer4PbX+ZyK8B1UidIeSNR3wN1eIii2ytsvahWlk4c18D9qxuoViNqrXBnu9q0IFcsTsm3cBlQJGscfEbj51j9h9LyQFkXRoIJi4Pz8/WtSvSKwrMjFlKkqezIkGDupbOiUXjB3wvT5TONhcwzO+ZVfq1SIC65ZeN+7du7q0WHt5RrvP6AoK/SHCjc/EGAjc/CuOO6VoiFkXcJzOQAPIf0qI1T8BO6L9yt/iAhy2DwFw/Nf6ViNt7ZyIBy9hOZ4saqbe6YNdbV+tbWI0RfADf+tayjXmdyzmSeP27hXbRpcPdI47dTlbUX8Mhclm1JMk95rU7J2TmUk6A6E8kGrHxOgHnWf2aJIHMgV6ZsnFJathSobOCF/dXTMfEzWt8pRXHb4Q30dUHXnGX4Mrt0mIiM8afDaXRV+X1rimKbqRrGkHdrAicx1Xdw3yK6bXvC47EbuHgN1Ubli41sBQSIkgCTvOvzrsphmGOhd6lBVzzEv7IcZXEnNvOUMSo0gMBAIHyk6TrQ7D3IuMZBkPHbykMBO4iCT8JgNw1q5sk5UaREHSWuLqZkiBlH9NaDujNcJVSSDOmZt3HUTWEKs2zj/jBxSsxXFlq+5Lr+GfMkmfKjNjAm7bgCTbl0/FbPtp859aCWmJgn9amtf0cx6WtWE5Z9D/UfOralNRSXa6G/p1akpSfL8eTHY7A5Z/WlAcVait50kjO0ADWQBuykafrvrF47fVKJOSyHqdUI8xK2A2g9g9nVTvU7j+RrRbK23YD5gxtMfaElQeZkdknvNZNxXJhRZVGfaFFV0ocxZ651yr28xb+OR+VdsL0mOGVguQBiDLtuMQdNJ4elYLCN1lkcyseY0+1CiKpDRQ7Np6ux8Nm3x/Srry4e4WIR2SYW3nQZgscZEgd5GtYjFYl7jZnMn5AcgOArrgbipdtsy51DqWWJzLIzCDvJE1XvJlZhBEEiCIIgxBHA8xW8a4w4Rzym5dnE1E1M1A1ZkEDTGnNMaoySJpqc01VAVOKanFAEhUhURUhVkQSFTFQFTFXQFnAhTct5zCZ0zmYhMwzGRu0nWrX+o3FZslxsuZok5tJMe1PCq+zWi9aOUvFy2cgAJaHU5QDvJ3R31B/aOkanTlruqUsvkPYv/6tfOnWHyCj6Cu227zG0czEyVGp7/6UMTfRDbX/AGv4lokkugTZn1Fd0ritd0qYIzkwzsRSzgDfoB4toPv6VpNp7RCHKp90IvdbXSfFjPrQ7YdtbOHfEN7WuQd5ABPoR/uoQl1nYsTJJqVWrJt+P5Z0V6qdSS8/wF1JatXawnYXKRlOhA3zxJ+nhWc2VbDMo5kVukwIS11oYTMldNRO6edcev8Aswn79eR1RUprfJ98ADGrbEL2gQZJ0ILDSY+/dV3YOzQAbkySOHedfHdVXH4VS5ZCCDwzAEN3g7hRbYSZbYVNGc9pzuHARSuUHt3KWc44/wAmv6K6S6M90nwqJclIkgF4+LXU8iQB6d9BExRQ/UcxWm27gBaLLIO4z+vGshjdKe6VKVaWc/Jx6pPT/VB98l3H3ustK4M5DkJ/A3sN5GV8hWYxDzRrYl4G4bdw/s7oZDJ3SN/dqBQnaeGa27I29SQfLj57/OrxgoScfyvyKrtRK1Jv9gewriwru1cTVZoxiHdhPNsjkx+YBqldEMR3n61b2COw3732FVb/ALTeJ+tEC76ORaNeWvpVnbSuL93rAocuWYKSVBft6E8O1VVqt7bQrfuKXNwjKM5iT2F5aabvKpfYLoHmoGpmoGqsCJqJqRqJqjLETTU5pqqAqcU1OKEBIU4phTirICYqYrmKmKuiCxhLhS4jiAVdGBO6VYET3SK7Y62yXbqvGZXcNG6QxmJ4cqpir+0QucMrl86W3JLZmDsozqx5hgd/CKldkexXFFceM9k+Ab0g0JBo9s/DPctxkYjVTod36NTPoImWWruz8MbtxLY3sY/P5VG7s27bJDW30JE5TXfZuL6nOwB6zLlQ/CW0Y+MaedEXxwVa55D3SG8q27VpGlQW3clIG7vbMfIcqC2TBquGJ3mf7z966oa6ao4WDnslmWTR7IvQwPIE/b71rdpY7LZtR7wn0JrAYK5Ab+EfU/ajO1cUeow/7r/+7VjfSnKH7/2Gel9QlCD+EXLOJzNrEfeRRPD7WhY3EctKyrXSltebHN5D+v0qFzEETBrb+jg10ii9Ulv5ZpOkeJ/aEc1HqRNZDF3Jot0lvnr/AOG2f5RWfvHU+JrLR1KNaI1+sdjx44OOYgyN4MjxFFNvoLk3VMnskj8LIpU/PKfChL1PDYgq0GWVhlKjUkHcB61e6L+5exxVS9n7g9q4mtHg9gz2rhgfCN/meHhRa1h7dsQiAd8a+p1pffqq6/uZ36bRXXfZHIL2Pg7gtA9W+pJ9k+HLuoZfsOurIy+KkfWtou0TlygCIiuCYomZAjX5f1rlj6nUhjL0XUY6X/ZjFAJHKR6TU8eyG5cNsRbzvkGuiZjl367o31r8LasvcS4bYzIwub8slGnfuOq7qzW1dlXLcvOdSSS3ESfeH3rsrvjbzFi62idUtklhgs1A1I1A1qzEiaY05pjVGSRNNTmmqoCpClSFAEhTimFOKlATFdbSFiFESSAJIUSd0sxAHiTXEUf6O4y1YIuG4yXJIgqSj2xlJCuoLJcJEbisSDoTUt4XAJZZU2tsx8LcyPuKh0aIDKRvjmDII5ir+z9mnEWU7JTq3fNcy6Mj5coniQwYa6druiuWFVsZcJYBLSs75FACpnIJRYA35R6Txr13opsAW0FxxqwAVI0VZBBI56AjlWVt2yKz2awr3PjozWwuhrMAyoEX43nMe8Df9BWos9F7dsS91j4AAeQ1rTmgO28cFB7tPzpbZqZ95O+nTKTwA8VsSy9xVR3DOY4HQb2gAbgKo7Y6FOATlW6o4qIcDw3+hNabo1h1IN9mBLSAJBCCdR+8Y15bq77U2hplG761WGqnBbmy9mljKW2K67PGdobGa3LJLLxHvL+YofbE16ZtLDIFDE/tXMhRxXiTyHfzrHbS2cEbOohWOo+FvyNOdHrY2R+RVqNFKEkvZnLBWJB8j9fzottXDE28Ov8A9f8A7MT96WxcLnbLz0+9aja2y8pQn2VAjwVf6UX6rFkF8jKr02Ox591/BhtoCbhA3LCjy/rNJLOZPDSut5NaI7KwvWHLzj613yvUYZOGr07da0ctvYbNdtnmlsfKs7iU1Pia9L2/svKFfkpjyXT7VgMekVxaLUboY8HTrdBHbvj7gdq0OydnC2Bccds/yj86obGwvWXMx9lNfPgPv5UZuXJaPSsfU9Z+lHEe2Y+laH+otxLpdnbMJhh4EcRzHOq2JwqHtC5HeG31dTK65W4fLv7qr38AxOpBXnxPjzrybnKT3SfJ76FcIxUYJJeDNYx7gP7NmHImO13CN3nT4XahYZHUqQZ3b+6Sd08t1H7+CB4bv0KD7Ut5BMkQRr57/GrRknwZzrcfqTCWz2lQeZf0mRV8Nz3UM2K0qFmTJMzzoi+mlOPTZra4PvOTyv8AyCuSnG2K4xhv5Mzt3ZnVnrEHYJ1Hwk/Y0PGAudUbxQi0CAHbQMSYhJ9sjeYmANa2Lqrhrbahgao7CuHN/lrjXSbbsYW66Z7WULEJNy4FUEi2gA7TEkDWmbm0hPXifP8AuTHmmNdsVbZHYPbNsyewVZcup0AbWBu1ndXE1YCJpUjSqCBUqVKgBxUhUBUhUgdLcSMxIEiSBJA4kDj4Vqtvt1eFtWxcDLonZYhHVAHzpbzuCCzQXGQyCCOWZwKlrlsDLJdAM3syWAGaPd51qOleMLsllrbdpw2e4jh5LsCFa4oY29RHLKKrJ/UjSP2s0PQDY4ZrasNAOtfvOmVT8h5GvUb99UEk+VY7ofcFu3dYbyUUdwAJ+9UekW33tgmMw4x7Q8uNKNXfibGui0rsSwHr+3g1zqweBJA5Ac/SgW17rXXCKYG8sdYA7qHdFcK+Idr5OhUqoG4SQTLcW08vOm2xcayzKTqCJjvEg+FLpTk45Y+o0sN+yL5Dux3TD2haQlgCTJ3sx3kxXTFXWZ9IPdzNZjA40kzRS3itcxPlQrMorqNK65NstLbCl7107ondPJVAHoAKGY9etzMUyLckAcoAgnv40Usnrl6sjjmJ5RVfHXg9vLbTsKQc/Fju05D6116SxxsWPcV6mGYPyuTP7CxBRzzUH1AJ/wCJo7tTaZIJJJ7Gk8A0D6t8qyy3Mly73dYf/wAWP1au228TD3U+G3bHmGE06nSp3Rfxk5Yeoba3n24Kd3Ea0Q2Tjcjgjv8ApWYa/VnA4mHXz+hphKrMcHBXr9s9xvtobUzBZJKsuncCAJ/m+VYfH3t9E8Tiv2FpuS3R5qxP0Ws9tG5+0cfib66Vw6OrYmvlnVrddugorwaDYGGLW4UEtcLbomN0ieUE1zsZyO2CHRjbcHeGABBPiD8qIbEumzatXMvsgaHTU13XFi490paDteCBgAzAFBAbTcd2v4a4tfppXyyvYx0Osjpppv8AK+CotyII3/rQ1Y6w+7rzQnXxU8aqYvC3LIBcaESY4dx7/Ch+IxmUTJA5xI8jwNIZVSg8NHtKtVXZHdF5CxxCTxHMEEH512weCXEXrae4Jd2IgBEg6k98Ch2y8TfxLZLSi7zzoVCjmbn5LNbS1sxbKNnOtwKHj2YWTlHHLJ861qolN8GGs19dcHHPL/3JLZvR/Co/WooM8AZXXQwN396z23MILNyJBUg5eYymIPeNKKYLHZetS2YYIbiDgSnaKxwzCR86pdJMZburauKNHGaDvEgAg9+kfw0y0tUq7Un8nmtfqFdppNN+zWfhgLPr6fWql5rdvFo9xstu6httKqysD2Sr5josESdYirhKAbvnQ3pAmd8Oo3s+UDQ72QDQ6Hfx0prNcoS6Rvn8A/pRiFuXgyuG7CAhWVlRtZQMiqrQMuqiNY1iaCmtN0ttG2LaCyqLqTdFu0mdpaAOrnKMvAmTvjSswaIvjg6Z/cKlSpVJQVKlSoAVOKalQBMVpukGyLWGVLlsOkOQAy3SHUEFWL3LaBHgMSokHgdDWZRipBGhBBB5EaitXe/b4RQ72uudTdIBQOVsq2TMttdwtA9q4ygTAWdTSbaaZpBZTNlsC7nV7YOrQ6nlpv8ApXPC9H2ZjcxjAiTFpTpv0Lt/xHmeFBuhe14VSTuHVv4e63yHzqx0o6Qtbt9n2mML9z5Ul1kNtnPuPfT7HKvbHjyGMXt1LAyr2RGRUQATPuqB5UDx6Pcgv7R1PGOAWTvgcfGo9DNkNc/6q8SxM5J+bd1G8TZknlXBPLWGOtNZCmWV35AWGtEGiCAndUGEGBRDA4ZnIVQSTwqsERq9Rv5JYC4VcKB7WlHNq4ZMPhhIhmZQByGp+1FtlbHW1DNDN8h4d/fWT6e7YUEqDK2gfO42keWg9aZ6Ol71k89q7000jG47FJcuXII1lTwJEZT9K4YxTdZ3LQzxOmmkbh5UBLTqd9dEvsNzH1r0Khh5Qlcs8MuHZ54MPSp2sCykHMNPGqgxtz4vkKc4258XyFX3S8lNsfAXC/s1tnUKXM/vqVI+Zri7W0JYxPPeaEvfY72PrXOaooYL7jZ7IxqXLeUrmVW1B4+8N360oku1NMq5UA3KAAPQbzWL2HjOruQfZfsnuPA/bzonj2W0dWgGSP6RXNbFJlucZQVxO1FZcrSe48PPhQzAbFbF3AlqQoMvcgwg9dTyH2rnsVGx2IW0mg9p33kWxEkd+oA3769GdreDti3bAUAep5k8T31yzjGX04Napzg9yeME8NhbODtBbYgDidWY8WY8TWc21tYtOsL3bz4Cq+0dtEg59DwE6HXfPAUNwFl8Q8udF1/oBwFXhXGCyzO26Vkv3Fg3uF+sU69oAdxBBnmYNUr+JkgE+yIjkRvHkZ9aN4m8tshQQGg+Ouk+lBH2GxJZbrSST21mSe8R9K0r5luwYW527MitNmIFRxGFe/iQUICWAj3GOWEBJbMQxAIASdSPUip2bLWA73coCCQQZn8jwjvrL/5+6Ha6lx7bsSZRmUweEqRpWknufBOmhsWX7hDpViC94CWJCWwzEnK5OZ1dR1lwBSrrENGpOk0ErpicQ9x2uXGLOxlmO8mudSlhYNpPLyKlSpVJUVKlSoAVKlSoAcUW2Xt25h7b21CuH0AftIgPtRbPZJOmp003GaEUqGk+GSm10EdnbRa1cLnUMe2NBMmSQBoCK0OL2f8A5trRVxkJAPcCRmPoIrHg1d2ftG5ZPZMqd6ncfyPfWN9EbY4Zvp9TKmWUezMotWxbQABQAPShl9ydBWa2f0oRwFL5fwvu8momMdm1UiO4zSS3RWxfCyhvVra5Ll4YW2dstrjAAb/pzrcYDZ6WVhRrxPE/kO6shs7pJbw9v/tsz8SSqiPHWg+2unzEFQ4QfDb1Y+L8PlW9Gkkvbkw1GrUnhPg2W3+kVvDgqpzP70GAg4ktBAPd615HtXELi7hW1cUIuo61ghuOSZhj2THMlZmhm0trve09lPhnf+8eNUJpvTSq18iyy3e/gsthbgXP1b5JIz5SUkGD2xpv764hqSX3UFQ7BW0ZQxAYciAYNWrm1Lj5M+R8hBGZEMwIhiACy9xNdOWYcFaaU1aG0BnzmzZPZy5MjKm+c0Kw7XDf5UyY8LnizaOYkiVY5ARGVZbQDhMmjc/AYRVzV3w2EuXWC20ZiQWiPdG9pOgXv3U7bQchAFtpkKsGS2itmUaEuBLc9TXLE4q5dOa5cdzul2LachO4d1GWHBYGFRQ/WXQjKSoRVLlmA+JTkCzpOY8dKL2MdaxdpbFxArLBDklnZgInMYj90b++szNLNVJQUlyWUsG76FWBhL9wRDOgAOsMAZ09RRvbmKDaHsmdxG8ffyrB7O6QtbgXJYDc49oePOtEu2Ld8AZ1buOjeYNcjrcZZL9xwmBNp3jnEoQDOUwSDG8SR6Ve2fiLltClsQW3seHcBV17Svba2ZgglTocr+6Qd/d4TXPB5rY7WX9eNWf1cMx2yi+ERw2AeZJJJ3k7/WrrkWxqde/cPGqGO6R2rYjMCeSan/duFZTae17l7T2U+Ecf3jxqyT9iVWk8s7be2t1zZEPYB3/EefhyoOaalWiWEXbyKlSpUECpUqVACpUqVACpUqVACpUqVACqQNRpxQBKpI5XcSPAkfSoCnqQOj3GbexPiSfrTA1GnFWAlNPNQFOKkglNPNRp6AHmlNNSqQHmmmlTVADzTTTGmNADzUTTmmqAJrfcbnYeDH86i9xm3sT4kn61GmNVJFUac0xqAFSpUqAFSpUqAFSpUqAP/9k=",
        descriptionHTML: `<h3></h3>
        <h2>Cơ Xương Khớp</h2>
        <h4>Bác sĩ Cơ Xương Khớp giỏi</h4>
        <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
        <li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li>
        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
        <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
        </ul>
        <h3></h3>
        <h2></h2>
        <h3>Bệnh Cơ Xương Khớp</h3>
        <ul>
        <li>Gout</li>
        <li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li>
        <li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li>
        <li>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</li>
        <li>Loãng xương, đau nhức xương</li>
        <li>Viêm xương, gai xương</li>
        <li>Viêm cơ, Teo cơ, chứng đau mỏi cơ</li>
        <li>Yếu cơ, Loạn dưỡng cơ</li>
        <li>Các chấn thương về cơ, xương, khớp</li>
        <li>...</li>
        </ul>        
        `,
        descriptionMarkdown: `
        ### 
        ## Cơ Xương Khớp
        #### Bác sĩ Cơ Xương Khớp giỏi
        
        Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:
        
        * Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm
        * Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội
        * Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.
        * Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
        
        ### 
        ## 
        ### Bệnh Cơ Xương Khớp
        
        
        * Gout
        * Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ
        * Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân
        * Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai
        * Loãng xương, đau nhức xương
        * Viêm xương, gai xương
        * Viêm cơ, Teo cơ, chứng đau mỏi cơ
        * Yếu cơ, Loạn dưỡng cơ
        * Các chấn thương về cơ, xương, khớp
        * ...`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Da liễu',
        image: "data:image/jpeg;base64,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",
        descriptionHTML: `<h2>Da liễu</h2>
        <h4>Bác sĩ Chuyên khoa Da liễu</h4>
        <p>BookingCare cung cấp thông tin và lịch khám của các bác sĩ chuyên khoa da liễu giỏi tại Hà Nội.</p>
        <p>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội như: Bệnh viện Da liễu Trung ương, Bệnh viện Da liễu Hà Nội</p>
        <ul>
        <li>Khám và điều trị</li>
        <li>Bệnh vẩy nến, Da khô, Ngứa da</li>
        <li>Rám tàn nhang</li>
        <li>Mụn cóc sinh dục</li>
        <li>Nấm cơ thể, Nấm da đầu</li>
        <li>Nấm móng tay, móng chân</li>
        <li>Rụng tóc, hói đầu</li>
        <li>Viêm da dị ứng, Viêm da tiếp xúc, Viêm da tiết bã</li>
        <li>Viêm nang lông</li>
        <li>Xơ cứng bì</li>
        <li>Zona thần kinh</li>
        </ul>
        `,
        descriptionMarkdown: `
        ## Da liễu
        
        
        #### Bác sĩ Chuyên khoa Da liễu
        
        BookingCare cung cấp thông tin và lịch khám của các bác sĩ chuyên khoa da liễu giỏi tại Hà Nội.
        
        Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội như: Bệnh viện Da liễu Trung ương, Bệnh viện Da liễu Hà Nội
        
        * Khám và điều trị
        * Bệnh vẩy nến, Da khô, Ngứa da
        * Rám tàn nhang
        * Mụn cóc sinh dục
        * Nấm cơ thể, Nấm da đầu
        * Nấm móng tay, móng chân
        * Rụng tóc, hói đầu
        * Viêm da dị ứng, Viêm da tiếp xúc, Viêm da tiết bã
        * Viêm nang lông
        * Xơ cứng bì
        * Zona thần kinh`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mắt',
        image: "data:image/jpeg;base64,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",
        descriptionHTML: `<h2>Chuyên khoa Mắt</h2>
        <p><strong>Bác sĩ Chuyên khoa Mắt</strong></p>
        <p>Hệ thống BookingCare cung cấp thông tin và lịch khám của các bác sĩ uy tín đầu ngành tại Việt Nam.</p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Mắt tại Hà Nội.</li>
        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Mắt Trung ương, Viện Y học Hàng không - Không quân, Bệnh viện Mắt Quốc tế DND...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...</li>
        </ul>
        <p><strong>Các bệnh về mắt</strong></p>
        <ul>
        <li>Tật khúc xạ</li>
        <li>Cận thị</li>
        <li>Nhược thị</li>
        <li>Viễn thị</li>
        <li>Lão thị</li>
        <li>Loạn thị</li>
        </ul>
        <p><strong>Các rối loạn về mắt</strong></p>
        <ul>
        <li>Hội chứng khô mắt</li>
        <li>Rối loạn ở hốc mắt</li>
        <li>Rối loạn tuyến lệ</li>
        <li>Tăng nhãn áp</li>
        </ul>
        <p><strong>Các bệnh lí khác về mắt</strong></p>
        <ul>
        <li>Lác mắt</li>
        <li>Viêm giác mạc</li>
        <li>Đục thủy tinh thể</li>
        <li>Dịch kính võng mạc</li>
        <li>Bong võng mạc</li>
        <li>Bệnh thoái hóa hoàng điểm tuổi già</li>
        </ul>        `,
        descriptionMarkdown: `
        ## Chuyên khoa Mắt
        
        **Bác sĩ Chuyên khoa Mắt**
        
        Hệ thống BookingCare cung cấp thông tin và lịch khám của các bác sĩ uy tín đầu ngành tại Việt Nam.
        * Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Mắt tại Hà Nội.
        * Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Mắt Trung ương, Viện Y học Hàng không - Không quân, Bệnh viện Mắt Quốc tế DND...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...
        
        **Các bệnh về mắt**
        
        * Tật khúc xạ
        * Cận thị
        * Nhược thị
        * Viễn thị
        * Lão thị
        * Loạn thị
        
        **Các rối loạn về mắt**
        
        * Hội chứng khô mắt
        * Rối loạn ở hốc mắt
        * Rối loạn tuyến lệ
        * Tăng nhãn áp
        
        **Các bệnh lí khác về mắt**
        
        * Lác mắt
        * Viêm giác mạc
        * Đục thủy tinh thể
        * Dịch kính võng mạc
        * Bong võng mạc
        * Bệnh thoái hóa hoàng điểm tuổi già`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nha khoa',
        image: "data:image/png;base64,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",
        descriptionHTML: `<h1></h1>
        <h2>Nha khoa</h2>
        <p><strong>Bác sĩ Nha khoa</strong></p>
        <p>Danh sách  bác sĩ Nha khoa uy tín tại ,:</p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều năm kinh nghiệm và khám, điều trị các bệnh lý nha khoa và răng thẩm mỹ tại Hà Nội.</li>
        <li>Các bác sĩ đã hoặc đang công tác tại các bệnh viện, phòng khám nha khoa uy tín, với các trang thiết bị hiện đại.</li>
        </ul>
        <p><strong>Khám tư vấn, điều trị các bệnh lý về răng, làm răng thẩm mỹ</strong></p>
        <ul>
        <li>Nhổ răng</li>
        <li>Hàn răng</li>
        <li>Điều trị tủy</li>
        <li>Điều trị Viêm nha chu</li>
        <li>Bọc răng sứ</li>
        <li>Làm răng giả</li>
        <li>Dán sứ Veneer</li>
        <li>Niềng răng (nắn chỉnh răng)</li>
        </ul>`,
        descriptionMarkdown: `
        # 
        ## Nha khoa
        
        
        **Bác sĩ Nha khoa**
        
        Danh sách  bác sĩ Nha khoa uy tín tại ,:
        
        * Các chuyên gia có quá trình đào tạo bài bản, nhiều năm kinh nghiệm và khám, điều trị các bệnh lý nha khoa và răng thẩm mỹ tại Hà Nội.
        * Các bác sĩ đã hoặc đang công tác tại các bệnh viện, phòng khám nha khoa uy tín, với các trang thiết bị hiện đại.
        
        **Khám tư vấn, điều trị các bệnh lý về răng, làm răng thẩm mỹ**
        
        * Nhổ răng
        * Hàn răng
        * Điều trị tủy
        * Điều trị Viêm nha chu
        * Bọc răng sứ
        * Làm răng giả
        * Dán sứ Veneer
        * Niềng răng (nắn chỉnh răng)`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tai mũi họng',
        image: "data:image/jpeg;base64,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",
        descriptionHTML: `<h2>Tai Mũi Họng</h2>
        <h3>Bác sĩ Chuyên khoa Tai Mũi Họng</h3>
        <p><strong>Danh sách các bác sĩ uy tín đầu ngành tại Việt Nam:</strong></p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tai Mũi Họng tại Hà Nội</li>
        <li>Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội</li>
        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Tai Mũi Họng Trung ương, Bệnh viện Quân Y 108...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ cao cấp,...</li>
        </ul>
        <p><strong>Các bệnh Tai Mũi Họng</strong></p>
        <ul>
        <li>Ù tai, đau tai, chảy máu tai</li>
        <li>Thủng màng nhĩ, điếc đột ngột</li>
        <li>Viêm tai giữa</li>
        <li>Amidan, V.A</li>
        <li>Viêm xoang</li>
        <li>Nghẹt mũi</li>
        <li>Hay bị chảy máu cam</li>
        <li>Đau cổ họng, khó nuốt</li>
        <li>Ho kéo dài</li>
        <li>Ngủ ngáy</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `
## Tai Mũi Họng


### Bác sĩ Chuyên khoa Tai Mũi Họng

**Danh sách các bác sĩ uy tín đầu ngành tại Việt Nam:**

* Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tai Mũi Họng tại Hà Nội
* Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội
* Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Tai Mũi Họng Trung ương, Bệnh viện Quân Y 108...
* Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ cao cấp,...

**Các bệnh Tai Mũi Họng**

* Ù tai, đau tai, chảy máu tai
* Thủng màng nhĩ, điếc đột ngột
* Viêm tai giữa
* Amidan, V.A
* Viêm xoang
* Nghẹt mũi
* Hay bị chảy máu cam
* Đau cổ họng, khó nuốt
* Ho kéo dài
* Ngủ ngáy
* ...`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sản phụ khoa',
        image: "data:image/jpeg;base64,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",
        descriptionHTML: `<h2>Sản Phụ khoa</h2>
        <p><strong>Bác sĩ Sản phụ khoa</strong></p>
        <p>BookingCare cung cấp thông tin và lịch khám của các bác sĩ chuyên khoa sản giỏi tại Hà Nội.</p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Sản phụ khoa tại Hà Nội</li>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội như: Bệnh viện Phụ sản Trung ương, Bệnh viện Phụ sản Hà Nội, Khoa Sản - Bệnh viện Bạch Mai.</li>
        </ul>
        <p><strong>Khám và điều trị</strong></p>
        <ul>
        <li>Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh</li>
        <li>Tắc hai vòi trứng, Đa nang buồng trứng, Chụp vòi trứng,</li>
        <li>Khám hiếm muộn, vô sinh</li>
        <li>Khám Phụ Khoa</li>
        <li>Khám thai sản</li>
        <li>Khám tiền hôn nhân, Tiền sinh</li>
        <li>Kiểm tra phụ khoa</li>
        <li>Loạn dưỡng vú</li>
        <li>Rong kinh kéo dài</li>
        <li>Siêu âm thai định kỳ</li>
        <li>Thai lưu</li>
        <li>U xơ tử cung, Viêm lộ tuyến</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `
        ## Sản Phụ khoa
        
        **Bác sĩ Sản phụ khoa**
        
        BookingCare cung cấp thông tin và lịch khám của các bác sĩ chuyên khoa sản giỏi tại Hà Nội.
        
        *  Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Sản phụ khoa tại Hà Nội
        * Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội như: Bệnh viện Phụ sản Trung ương, Bệnh viện Phụ sản Hà Nội, Khoa Sản - Bệnh viện Bạch Mai.
        
        **Khám và điều trị**
        
        * Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh   
        * Tắc hai vòi trứng, Đa nang buồng trứng, Chụp vòi trứng,       
        * Khám hiếm muộn, vô sinh   
        * Khám Phụ Khoa   
        * Khám thai sản   
        * Khám tiền hôn nhân, Tiền sinh   
        * Kiểm tra phụ khoa   
        * Loạn dưỡng vú   
        * Rong kinh kéo dài   
        * Siêu âm thai định kỳ   
        * Thai lưu
        * U xơ tử cung, Viêm lộ tuyến
        * ...`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nam học',
        image: "data:image/jpeg;base64,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",
        descriptionHTML: `<h2>Nam học</h2>
        <h3>Bác sĩ Chuyên khoa Nam học</h3>
        <p><strong>Danh sách bác sĩ Nam học uy tín đầu ngành tại Việt Nam:</strong></p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Nam học tại Hà Nội</li>
        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh Viện Việt Đức, Bệnh viện Xanh-pôn,...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...</li>
        </ul>
        <p><strong>Tư vấn, khám và điều trị các Bệnh chuyên khoa Nam học</strong></p>
        <ul>
        <li>Mãn dục nam giới, Suy sinh dục nam</li>
        <li>Viêm đường tiết niệu – sinh dục</li>
        <li>Viêm nhiễm: viêm bao quy đầu, viêm tinh hoàn</li>
        <li>Bệnh lý bao quy đầu: hẹp, dài bao quy đầu</li>
        <li>Rối loạn chức năng sinh dục: xuất tinh sớm, rối loạn cương dương, rối loạn xuất tinh, Xuất tinh kèm máu…</li>
        <li>Bệnh xã hội: lậu, giang mai, sùi mào gà, herpes…</li>
        <li>Các trường hợp sẩn ngứa, sẩn cục cơ quan sinh dục</li>
        <li>Xuất tinh ngược, Viêm tinh hoàn</li>
        <li>Các bệnh lý liên quan đến hiếm muộn</li>
        <li>Tinh hoàn ẩn</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `
        ## Nam học
        
        
        ### Bác sĩ Chuyên khoa Nam học
        
        
        **Danh sách bác sĩ Nam học uy tín đầu ngành tại Việt Nam:**
        
        * Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Nam học tại Hà Nội
        * Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh Viện Việt Đức, Bệnh viện Xanh-pôn,...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...
        
        **Tư vấn, khám và điều trị các Bệnh chuyên khoa Nam học**
        
        * Mãn dục nam giới, Suy sinh dục nam
        * Viêm đường tiết niệu – sinh dục
        * Viêm nhiễm: viêm bao quy đầu, viêm tinh hoàn
        * Bệnh lý bao quy đầu: hẹp, dài bao quy đầu
        * Rối loạn chức năng sinh dục: xuất tinh sớm, rối loạn cương dương, rối loạn xuất tinh, Xuất tinh kèm máu…
        * Bệnh xã hội: lậu, giang mai, sùi mào gà, herpes…
        * Các trường hợp sẩn ngứa, sẩn cục cơ quan sinh dục
        * Xuất tinh ngược, Viêm tinh hoàn
        * Các bệnh lý liên quan đến hiếm muộn
        * Tinh hoàn ẩn
        * ...
        `,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};