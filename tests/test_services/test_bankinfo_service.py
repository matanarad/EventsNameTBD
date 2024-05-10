from app.services.bankinfo_service import BankInfoService as bi
from app.repositories.bankinfo_repository import BankInfo

import unittest


class TestBankInfoService(unittest.TestCase):
    def test_update_bankinfo(self):
        self.assertEqual(bi.add_row(BankInfo(1, "bankinfo")), BankInfo(1, "bankinfo"))  # add assertion here


if __name__ == '__main__':
    unittest.main()
